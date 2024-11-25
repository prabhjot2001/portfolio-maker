import { prisma } from "../utils/db";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/jwtService";
import { JWT_REFRESH_TOKEN } from "../utils/getEnv";

const createErrorResponse = (status: number, msg: string) => ({
  status,
  body: { msg },
});

const createSuccessResponse = (status: number, msg: string, data?: any) => ({
  status,
  body: { msg },
  data: data,
});

export const authController = {
  signUp: async (ctx: any) => {
    const { name, email, password, confirmPassword } = ctx.body;
    if (!name || !email || !password || !confirmPassword)
      return createErrorResponse(
        400,
        "Validation failed: All fields are required."
      );

    if (password !== confirmPassword)
      return createErrorResponse(400, "Password do not matched");

    try {
      const IsUserExists = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (IsUserExists) {
        ctx.set.status = 400;
        return createErrorResponse(400, "User already exists");
      }

      const hashedPassword = await argon2.hash(password);
      const user = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          name: name,
        },
      });

      return createSuccessResponse(201, "User created successfully");
    } catch (error) {
      console.log(error);
    }
  },

  signIn: async (ctx: any) => {
    const { email, password } = ctx.body;
    if (!email || !password)
      return createErrorResponse(400, "All fields are required");
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        ctx.set.status = 400;
        return createErrorResponse(400, "Invalid credentials");
      }

      const hashedPassword = user.password;
      const passwordMatched = await argon2.verify(hashedPassword, password);
      if (!passwordMatched) {
        ctx.set.status = 400;
        return createErrorResponse(400, "Invalid credentials");
      }

      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);

      await prisma.refreshToken.create({
        data: { token: refreshToken, userId: user.id },
      });

      return createSuccessResponse(200, "user logged in successfully", {
        id: user.id,
        email: user.email,
        name: user.name,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      console.log(error);
    }
  },

  logout: async (ctx: any) => {
    const { refreshToken } = ctx.body;
    try {
      await prisma.refreshToken.delete({
        where: {
          token: refreshToken,
        },
      });

      return createSuccessResponse(204, "User logged out");
    } catch (error) {
      console.log(error);
    }
  },

  // <--- implementing refreshing token logic --->
  refreshToken: async (ctx: any) => {
    const { refreshToken } = ctx.body;
    if (!refreshToken) {
      ctx.set.status = 400;
      return createErrorResponse(400, "Refresh token required");
    }

    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
    });
    if (!storedToken) {
      ctx.set.status = 400;
      return createErrorResponse(400, "Invalid refresh token");
    }

    try {
      const payload = verifyToken(refreshToken, JWT_REFRESH_TOKEN);
      const newAccessToken = generateAccessToken(payload.id);
      return createSuccessResponse(200, "success", {
        accessToken: newAccessToken,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
