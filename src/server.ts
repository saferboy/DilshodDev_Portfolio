import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import api from "./api/router"

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', api)

app.listen(port, () => {
    console.log(`Sever is running is ${port}`)
})