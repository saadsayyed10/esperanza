import express from "express";
import cors from "cors";
import { env } from "./config/env.config";
import { dbConnect } from "./config/db.config";
import mainRouter from "./routes/index.route";

const app = express();
const PORT = env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", mainRouter);

const startServer = async () => {
  await dbConnect();

  app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
};

startServer();
