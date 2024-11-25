import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN } from "./getEnv";

const generateAccessToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_ACCESS_TOKEN, { expiresIn: "15m" });
};

const generateRefreshToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_REFRESH_TOKEN, { expiresIn: "7d" });
};

const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

export { generateAccessToken, generateRefreshToken, verifyToken };
