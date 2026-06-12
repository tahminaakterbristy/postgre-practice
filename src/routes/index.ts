import { Router } from "express";
import issueRoutes from "../modules/issue/issue.routes";
import authRoutes from "../modules/auth/auth.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/issues", issueRoutes);

export default router;