import { NextFunction, Request, Response } from "express";
import  User from "../database/models/userModel";
import { BadRequest, Created, InternalServerError, Unauthorized } from '../config/httpErrors';
import { Lang } from "../typings/lang";
import { JWT_SECRET } from "../config/jwtSecret";

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const lang:Lang = 'fr';
exports.signup = (req: Request, res: Response, next: NextFunction) => {
    
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(() => res.status(Created.code).json({ message: Created.message[lang] }))
        .catch(error => res.status(BadRequest.code).json({ error }));
}


  exports.login = (req:Request, res:Response, next:NextFunction) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(Unauthorized.code).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then((valid:boolean) => {
                    if (!valid) {
                        return res.status(Unauthorized.code).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            JWT_SECRET,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch((error: any) => res.status(InternalServerError.code).json({ error }));
        })
        .catch(error => res.status(InternalServerError.code).json({ error }));
 };