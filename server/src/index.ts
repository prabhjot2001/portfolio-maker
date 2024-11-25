import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { authRoutes } from "./routes/authRoutes";

const app = new Elysia();

app.use(cors());
app.use(authRoutes);

app.listen(8000, () => {
  console.log(`server is up`);
});
