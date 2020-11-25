import multer from "multer"; //동영상 파일을 쉽게 올리게 하는 것, url로 동영상 파일 올리게 함
import routes from "./routes";

const multerVideo = multer({dest: "videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id:1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile"); //오직 videoFile이란 이름을 가진 것만 사용