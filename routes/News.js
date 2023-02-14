import express from "express";
import {
  createNews,
  deleteNews,
  getNews,
  getNewsById,
  updateNews,
} from "../controllers/News.js";

const router = express.Router();

router.get("/api/news", getNews);
router.get("/api/news/:id", getNewsById);
router.post("/api/news", createNews);
router.patch("/api/news/:id", updateNews);
router.delete("/api/news/:id", deleteNews);

export default router;
