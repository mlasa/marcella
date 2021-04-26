import express from 'express'
import connectToDB from './utils/connectToDB'
import router from './routes/index'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: false })) //poder pegar parametros da url
app.use(express.json())

connectToDB()
app.use(router)

app.listen(process.env.PORT, () => console.log("I'm alive! 🤖 --> http://localhost:3333"))
