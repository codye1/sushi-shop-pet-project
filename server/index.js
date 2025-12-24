require('dotenv').config()
const fs = require('fs')
const express = require('express')
const server = express()
const router = require("./router/index")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
// temp
console.log(process.env.PORT);
console.log(process.env.CORS);

const PORT = process.env.PORT || 5000

server.use(cors({
  origin: function (origin, callback) {
    // 1. Allow if origin is empty (e.g., mobile apps)
    // 2. Allow if it matches the main CORS variable
    // 3. Allow if it is any of your branches on Vercel
    if (!origin ||
        origin === process.env.CORS ||
        origin.includes("sushi-shop-pet-project") && origin.endsWith(".vercel.app")) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

server.options('*', cors())

server.use(express.json())
server.use(cookieParser())

server.use(router)


const start = async ()=>{
  try{
    // temp
    console.log(process.env.PORT);
    console.log(process.env.CORS);
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