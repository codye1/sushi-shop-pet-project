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

const corsAllowList = (process.env.CORS || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)

const isAllowedOrigin = (origin) => {
  // Reject requests without origin in production for security
  if (!origin) {
    return process.env.NODE_ENV !== 'production'
  }
  
  if (corsAllowList.includes(origin)) return true

  try {
    const url = new URL(origin)

    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return true

    return false
  } catch {
    return false
  }
}

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, isAllowedOrigin(origin))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

server.use(cors(corsOptions))
server.options('*', cors(corsOptions))


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