import { NextFunction, Response } from "express";
import { AuthRequest } from "../typings/customHttp";

const jwt = require('jsonwebtoken');


 
module.exports = (req:AuthRequest, res:Response, next: NextFunction) => {
    try {
    let token:string = ""
      if (!req.headers.authorization) {
        throw new Error('should have authorization  field')
      }
       token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        
        
       req.auth = {
           userId: userId
        };
        
	next();
   } catch(error) {
       console.log(error);
   }
};