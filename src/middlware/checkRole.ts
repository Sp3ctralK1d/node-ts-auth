import { Request, Response, NextFunction } from 'express'
export default (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(req.currentUser.role !== requiredRole){
            return res.status(401).end()
        }
        return next()
    }
}