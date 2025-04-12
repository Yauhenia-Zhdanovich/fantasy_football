import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import swagger from '@fastify/swagger'
import { Country } from './models/Country.ts'
import teamRoutes from './routes/teamRoutes.ts'
import playerRoutes from './routes/playersRoutes.ts'
import './models/index.ts'
import swaggerUI from '@fastify/swagger-ui';

dotenv.config()

await mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo:27017/fantasy-football')
console.log('✅ Connected to MongoDB')

const app = Fastify({ logger: true })

await app.register(cors)

await app.register(jwt, {
  secret: process.env.JWT_SECRET || 'supersecret',
})

await app.register(swagger, {
  openapi: {
    info: {
      title: 'Fantasy Football API',
      description: 'REST API for fantasy football data — players, teams, seasons, and more.',
      version: '1.0.0',
    },
  },
});

await app.register(swaggerUI, {
  routePrefix: '/docs',
});

app.get('/ping', async () => {
  return { message: 'pong' }
})

app.get('/', async () => {
  return { status: 'ok', message: 'Fantasy Football backend is running 🚀 🚀 🚀 🚀' }
})

app.register(teamRoutes)
app.register(playerRoutes)

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
