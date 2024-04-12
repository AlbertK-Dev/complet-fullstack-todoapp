import  express, { NextFunction, Request, Response } from "express";
import { OK } from "../config/httpErrors";
import userController from "../controllers/userController";

const userRouter = express.Router()


userRouter.get('/', userController.test)


export default userRouter