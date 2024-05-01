import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {getUsersForSidebar, getUserStatus, updateUserStatus} from "../controllers/user.controller.js";

const router = express.Router()

router.get("/", protectRoute, getUsersForSidebar)
router.post("/update-status", protectRoute, updateUserStatus);
router.get('/get-status', protectRoute, getUserStatus);
export default router;