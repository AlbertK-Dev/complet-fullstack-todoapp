import { NextFunction, Request, Response, Router } from "express";
import  express from 'express';
import todoController from "../controllers/todoController";

const todoRouter = express.Router()

todoRouter.get("/", todoController.test)


export default todoRouter