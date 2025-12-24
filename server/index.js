require('dotenv').config()
const fs = require('fs')
const express = require('express')
const server = express()
const router = require("./router/index")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin ||
      origin === process.env.CORS ||
      (origin.includes('sushi-shop-pet-project') && origin.endsWith('.vercel.app'))
    ) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}

server.use(cors(corsOptions))
server.options('*', cors(corsOptions))

server.use(express.json())
server.use(cookieParser())

server.use(router)

const start = async () => {
  try {
    if (process.env.MONGODB_URL) {
      await mongoose.connect(process.env.MONGODB_URL)
    } else {
      console.warn('MONGODB_URL is not set; server will run without DB connection')
    }

    // На Vercel нельзя поднимать listen(): платформа сама вызывает serverless handler.
    if (!process.env.VERCEL) {
      server.listen(PORT, () => {
        console.log(`Port:${PORT}`)
      })
    }
  } catch (e) {
    console.log(e)
  }
}

start()
console.log('Server initialized')
module.exports = server;