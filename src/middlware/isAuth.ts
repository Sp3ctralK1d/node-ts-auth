import * as jwt from 'express-jwt'
import { Request, Response} from 'express'

const getTokenFromHeader = (req: Request) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'JWT') {
        return req.headers.authorization.split(' ')[1]
    }
}

export default jwt({
    secret: 'secret',
    userProperty: 'token',
    getToken: getTokenFromHeader
})