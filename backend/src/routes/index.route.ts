import { Router } from "express";
import userRouter from "./user.route";
import scanRouter from "./scan.route";

const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/scan", scanRouter);

export default mainRouter;
