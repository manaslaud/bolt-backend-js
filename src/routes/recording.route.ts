import express from "express"
import { getRecordingController, uploadController } from "../controllers/recording.controller.js";
import { protect } from "../middleware/protect.js";

const recordingRouter = express.Router();

recordingRouter.post("/upload", protect,  uploadController);
recordingRouter.get("/uploadget", protect,getRecordingController);

export default recordingRouter;