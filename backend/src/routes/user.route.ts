import { Router } from "express";
import * as controllers from "../controllers/user.controller";
import { protectRoute } from "../middleware/auth.middleware";

const userRouter = Router();

userRouter.post("/signup", controllers.registerUserController);
userRouter.post("/login", controllers.loginUserController);

userRouter.get(
  "/profile",
  protectRoute,
  controllers.fetchUserProfileController,
);
userRouter.get(
  "/profile/picture",
  protectRoute,
  controllers.fetchUserProfilePictureController,
);

export default userRouter;
