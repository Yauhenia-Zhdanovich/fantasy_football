import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import teamRoutes from './routes/teamRoutes.ts'
import playerRoutes from './routes/playersRoutes.ts'
import authRoutes from './routes/authRoutes.ts'
import countryRoutes from './routes/countryRoutes.ts';
import seasonRoutes from './routes/seasonRoutes.ts';
import { ZodError } from 'zod'
import './models/index.ts'
import leagueRoutes from './routes/leagueRoutes.ts'
import lineupRoutes from './routes/lineupRoutes.ts'
import fantasyTeamRoutes from './routes/fantasyTeamRoutes.ts'

dotenv.config()

await mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo:27017/fantasy-football')
console.log('✅ Connected to MongoDB')

const app = Fastify({ logger: true })

await app.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = [
      'http://localhost:4200',
      'http://localhost:3000'
    ]

    const isAllowed =
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.netlify.app')

    if (isAllowed) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS'), false)
    }
  },
  credentials: true,
})

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
})

await app.register(swaggerUI, {
  routePrefix: '/docs',
})

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: 'Validation failed',
      details: error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  request.log.error(error);
  reply.status(error.statusCode || 500).send({ error: error.message });
});

app.get('/ping', async () => {
  return { message: 'pong' }
})

app.get('/', async () => {
  return { status: 'ok', message: 'Fantasy Football backend is running 🚀 🚀 🚀 🚀' }
})

app.register(authRoutes);
app.register(teamRoutes)
app.register(playerRoutes)
app.register(countryRoutes);
app.register(leagueRoutes);
app.register(seasonRoutes);
app.register(lineupRoutes);
app.register(fantasyTeamRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
