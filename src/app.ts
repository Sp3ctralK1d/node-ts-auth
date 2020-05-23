import routes from './routes'

import express, { Application, Request, Response, NextFunction } from "express"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app: Application = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api', routes)


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('api check')
})

const port = process.env.PORT || 3000
app.listen(port, async () => {
    console.log(`Server is ready`)

    const mongoConnections = await mongoose.connect('mongodb://localhost:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('DB is ready') 

    console.log(`Listening on port ${port}`)

})