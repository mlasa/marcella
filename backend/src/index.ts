import express from 'express'
import connectToDB from './utils/connectToDB'
import router from './routes/index'

const app = express()
app.use(express.urlencoded({ extended: false })) //poder pegar parametros da url
app.use(express.json())

connectToDB()
app.use(router)

app.listen(3333, () => console.log("I'm alive! 🤖 --> http://localhost:3333"))
