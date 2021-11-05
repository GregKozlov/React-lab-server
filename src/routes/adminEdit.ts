import { Router, Request, Response } from "express";
import Games from "../../models/games";
import gamesRouter from "./games";

// npx sequelize-cli db:seed:undo:all
// npx sequelize-cli db:seed:all

const adminEditRouter = Router();

// /api/admin/getGameById
adminEditRouter.get(
    "/getGameById/:id",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;

            const result = await Games.findOne({ where: { id: id } });

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

// /api/admin/updateGameInfo
adminEditRouter.post(
    "/updateGameInfo/:id",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;
            const { gameName, price, image, description, genre } = req.body;

            console.log(id);
            console.log(req.body);

            await Games.update(
                {
                    gameName: gameName,
                    price: price,
                    genre: genre,
                    image: image,
                    description: description,
                },
                {
                    where: {
                        id: id,
                    },
                },
            );

            const result = await Games.findOne({ where: { id: id } });

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

// /api/admin/deleteById/:id
adminEditRouter.delete(
    "/deleteById/:id",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;

            const result = await Games.destroy({ where: { id: id } });

            const data = await Games.findAll();

            res.status(200).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

export default adminEditRouter;
