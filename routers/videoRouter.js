import express from "express";
import { delete_video, edit_video, upload, videos, video_detail } from "../controllers/videoController";
import routes from "../routes"

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, video_detail);
videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.deleteVideo, delete_video);

export default videoRouter;