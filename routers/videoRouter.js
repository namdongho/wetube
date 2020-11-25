import express from "express";
import { delete_video, edit_video, getUpload, postUpload, video_detail } from "../controllers/videoController";
import routes from "../routes";
import {uploadVideo} from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), video_detail);
videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.deleteVideo, delete_video);

export default videoRouter;