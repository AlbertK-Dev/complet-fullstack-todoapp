import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../config/httpErrors";
import { AuthRequest } from "../typings/customHttp";
import { Lang } from "../typings/lang";



const lang:Lang = 'fr'

export default function errorMid(err: Error, req:AuthRequest, res:Response, next:NextFunction) {
    console.error(err.stack);
  res.status(InternalServerError.code).send(InternalServerError.message[lang]);
    
}