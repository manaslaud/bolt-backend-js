import express from "express"
import { sampleController } from "../controllers/sample.controller.js";

const sampleRouter = express.Router();

sampleRouter.get("/", sampleController);

export default sampleRouter;