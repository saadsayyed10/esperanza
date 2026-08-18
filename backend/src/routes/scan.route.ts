import { Router } from "express";
import * as controllers from "../controllers/scan.controller";
import { protectRoute } from "../middleware/auth.middleware";

const scanRouter = Router();

scanRouter.post("/resume", protectRoute, controllers.scanResumeController);

export default scanRouter;
