import routes from "../routes";

export const home = (req, res) => res.render("home", {pageTitle : "Home", videos});
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    //const searchingBy = req.query.term;
    res.render("search", {pageTitle : "Search", searchingBy, videos});
};
export const getUpload = (req, res) => res.render("upload", {pageTitle : "Upload"});
export const postUpload = (req, res) => {
    const {
        body:{ file, title, description }
    } = req;

    res.redirect(routes.videoDetail(324223));
};
export const video_detail = (req, res) => res.render("videoDetail", {pageTitle : "Video Detail"});
export const edit_video = (req, res) => res.render("editVideo", {pageTitle : "Edit Video"});
export const delete_video = (req, res) => res.render("deleteVideo", {pageTitle : "Delete Video"});