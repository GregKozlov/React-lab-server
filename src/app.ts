import express from "express";
import logger from "morgan";
import * as path from "path";
import cors from "cors";

import authRouter from "./routes/auth";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

import bodyParser from "body-parser";

// Routes
import { index } from "./routes/index";
import gamesRouter from "./routes/games";

// import { getGames } from "./controllers/getGame";

// Create Express server
export const app = express();
app.use(cors());
app.options("*", cors());
// app.get('/games', getGames) //work
//write routes here
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

app.use("/api/games", gamesRouter);
// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);

app.use(express.static("public"));
