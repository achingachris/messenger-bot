import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello World");
    })

    return app.use("/", router); //setting defualt router to start with a slash
}

module.exports = initWebRoutes;