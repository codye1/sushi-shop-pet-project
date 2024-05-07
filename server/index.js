require('dotenv').config()
const fs = require('fs')
const express = require('express')
const server = express()
const router = require("./router/index")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cookieParser())

server.use(cors({
  //https://sushi-shop-pet-project.vercel.app
  //http://localhost:5173
  origin: "http://localhost:5173",
  credentials: true,
}))


server.use(router)


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

module.exports = server;