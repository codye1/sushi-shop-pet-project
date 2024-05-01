require('dotenv').config()
const express = require('express')
const server = express()
const router = require("./router/index")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const jsonRouter = require('json-server').router("db.json")

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cookieParser())

server.use(cors({
  origin: 'https://sushi-shop-pet-project-67ew.vercel.app',
  credentials: true,
}))


server.use("/product",jsonRouter)
server.use("/auth",router)


const start = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URL)

    server.listen(PORT, () => {
      console.log(`Port:${PORT}`)
    })
  }catch (e){
    console.log(e);
  }
}

start()