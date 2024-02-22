import express from "express"
import { getRecordingController, uploadController } from "../controllers/recording.controller.js";

const recordingRouter = express.Router();

recordingRouter.post("/upload", uploadController);
recordingRouter.get("/uploadget", getRecordingController);

export default recordingRouter;