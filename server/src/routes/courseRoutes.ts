import express from "express";
import { listCourses, getCourse } from "../controllers/courseController";

const router = express.Router();

router.get("/", listCourses);
router.get("/:courseId", getCourse);

export default router;