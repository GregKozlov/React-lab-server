import { getGames } from "../controllers/getGame";
import { Router } from "express";
import Games from "../../models/games";

const gamesRouter = Router();

// /api/games/getAllGames
gamesRouter.get("/getAllGames", getGames);

// gamesRouter.get("/test", async (req, res) => {
//     try {
//         console.log('router')
//         const games = await Games.findAll();
//         console.log(games);
//         res.status(200).json(games);
//     } catch (e) {
//         res.status(500).json({ message: "Crash" });
//     }
// });

export default gamesRouter;
