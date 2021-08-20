import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, check, validationResult } from "express-validator";
import { Response, Request } from "express-serve-static-core";
import { Router } from "express";
import Users from "../../models/users";

// interface iUser {
//     id: number;
//     userName: string;
//     password: string;
//     email: string;
//     info: string;
//     createdAt: string;
//     updatedAt: string;
// }

const authRouter = Router();

authRouter.post(
    "/register",
    [
        check("email", "Wrong Email").isEmail(),
        check("password", "Password requires at least 6 symbols").isLength({
            min: 6,
        }),
    ],
    async (req: Request, res: Response) => {
        try {
            const valRes = validationResult(req);
            if (!valRes.isEmpty()) {
                return res.status(400).json({
                    errors: valRes.array(),
                    message: "Some data was written wrong",
                });
            }
            const { email, password } = req.body;

            const candidate = await Users.findOne({ where: { email: email } });
            if (candidate) {
                return res.status(400).json({
                    message: "Such user is already exists",
                });
            }
            const hashedPass = await bcrypt.hash(password, 12);

            await Users.create({
                email: email,
                password: hashedPass,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            res.status(201).json({ message: "New user Created" });
        } catch (e) {
            res.status(500).json({
                message: "Server error, try later",
            });
        }
    },
);

authRouter.post(
    "/signin",
    [
        check("email", "Wrong Email").isEmail(),
        check("password", "Password requires at least 6 symbols").isLength({
            min: 6,
        }),
    ],
    async (req: Request, res: Response) => {
        try {
            const valRes = validationResult(req);
            if (!valRes.isEmpty()) {
                return res.status(400).json({
                    errors: valRes.array(),
                    message: "Some data was written wrong",
                });
            }
            const { email, password } = req.body;

            const user: any = await Users.findOne({ where: { email: email } });

            if (!user) {
                return res.status(400).json({ message: "User not found" });
            }
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Incorrect password" });
            }

            const token = jwt.sign({ userId: user.id }, "secret", {
                expiresIn: "1h",
            });

            res.status(200).json({
                token,
                userName: user.userName,
                email: user.email,
                id: user.id,
            });
        } catch (e) {
            res.status(500).json({
                message: "Server error, try later",
            });
        }
    },
);

export default authRouter;
