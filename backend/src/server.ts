import express from "express";
import cors from "cors";
import { env } from "./config/env.config";

const app = express();
const PORT = env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
