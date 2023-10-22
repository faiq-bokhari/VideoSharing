import express from "express";
import { addVideo, getByTags, randVideo, search, subscribedVideo, trendVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", addVideo)
router.get("/rand", randVideo)
router.get("/trend", trendVideo)
router.get("/sub", verifyToken, subscribedVideo)
router.get("/tags", getByTags)
router.get("/search", search)

export default router;