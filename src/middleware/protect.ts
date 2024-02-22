import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import envGet from '../helpers/getEnv.js';
import logger from '../../logs/logger.js';


export const protect = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.status(400).json({ error: 'Invalid token', verified: false });
    }
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, envGet.JWT_KEY, function (err, decoded) {
        if (err) {
            logger.error(err.message + "by" + req.ip);
            return res.status(401).json({ error: "Unauthorized access", verified: false });
        }
        req.body.decoded = decoded;
        next();
    });
}