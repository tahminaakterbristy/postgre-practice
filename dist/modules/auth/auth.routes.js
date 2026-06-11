import { Router } from "express";
import { signup } from "./auth.controller";
const router = Router();
router.post("/signup", signup);
export default router;
//# sourceMappingURL=auth.routes.js.map