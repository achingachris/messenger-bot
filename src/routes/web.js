import express from "express";
import chatbotController from "../controllers/chatbotController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", chatbotController.test)

    return app.use("/", router); //setting defualt router to start with a slash
}

module.exports = initWebRoutes;