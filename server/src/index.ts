import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { authRoutes } from "./routes/authRoutes";
import { PORT, SERVER_HOSTNAME } from "./utils/getEnv";

const app = new Elysia();

app.use(cors());
app.use(authRoutes);

app.listen(
  {
    port: PORT,
    hostname: SERVER_HOSTNAME,
  },
  () => {
    console.log(`Server is running on http://${SERVER_HOSTNAME}:${PORT}`);
  }
);
