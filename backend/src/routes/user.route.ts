import { Router } from "express";
import * as controllers from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/signup", controllers.registerUserController);

export default userRouter;
