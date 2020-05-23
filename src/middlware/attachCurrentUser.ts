import UserModel from '../models/User'

import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
    try{
        const decodedUser = req.token.data
        const user = await UserModel.findOne({ _id: decodedUser._id })
        if (!user) {
            return res.status(401).end()
        }
        req.currentUser = user
        return next()
    } catch (err) {
        res.json(err).status(500).end()
    }
}