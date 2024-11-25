import { Elysia } from "elysia";
import { authController } from "../controllers/authController";

export const authRoutes = new Elysia().group("/api/v1/auth", (app) => {
  return app
    .post("/sign-up", (ctx) => authController.signUp(ctx))
    .post("/sign-in", (ctx) => authController.signIn(ctx))
    .post("/logout", (ctx) => authController.logout(ctx))
    .get("/test", () => "test route");
});
