import { Router } from "express";
import * as controllers from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/signup", controllers.registerUserController);
userRouter.post("/login", controllers.loginUserController);

userRouter.get("/profile", controllers.fetchUserProfileController);

export default userRouter;
