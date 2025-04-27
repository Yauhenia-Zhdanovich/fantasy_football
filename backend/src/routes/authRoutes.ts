import { FastifyInstance } from 'fastify';
import { signup, login } from '../controllers/authController.ts';
import { SignupSchema, LoginSchema } from '../schemas/authSchemas.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/signup', {
    schema: {
      body: zodToJsonSchema(SignupSchema, { target: 'openApi3' }),
      response: {
        201: {
          description: 'User created successfully',
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    handler: signup,
  });

  fastify.post('/login', {
    schema: {
      body: zodToJsonSchema(LoginSchema, { target: 'openApi3' }),
      response: {
        200: {
          description: 'Successful login',
          type: 'object',
          properties: {
            token: { type: 'string' },
          },
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
        401: {
          description: 'Invalid credentials',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    handler: login,
  });
}
