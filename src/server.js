require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

// config view engine
viewEngine(app);

// config bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// web routes
initWebRoutes(app);

// port
let port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
