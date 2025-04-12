import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Country } from './models/Country.ts'

dotenv.config()

await mongoose.connect(process.env.MONGO_URL || 'mongodb://mongo:27017/fantasy-football');
console.log('✅ Connected to MongoDB');

const app = Fastify({ logger: true })
await app.register(cors)

await app.register(jwt, {
  secret: process.env.JWT_SECRET || 'supersecret',
})

// Ping route
app.get('/ping', async () => {
  return { message: 'pong' }
})


app.get('/', async (request, reply) => {
  return { status: 'ok', message: 'Fantasy Football backend is running 🚀 🚀 🚀 🚀' };
});

app.get('/countries', async (request, reply) => {
  try {
    const countries = await Country.find({});
    return countries;
  } catch (err) {
    request.log.error(err);
    reply.code(500).send({ error: 'Failed to fetch countries' });
  }
})

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
