import { FastifyRequest, FastifyReply } from 'fastify';
import { LoginSchema, SignupInput, LoginInput } from '../schemas/authSchemas.ts';
import { User } from '../models/User.ts';
import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';

export const signup = async (request: FastifyRequest<{ Body: SignupInput }>, reply: FastifyReply) => {
  try {
    const { username, password } = request.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return reply.status(400).send({ error: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();

    reply.code(201).send({ message: 'User registered successfully' });
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: 'Signup failed due to server error' });
  }
};

export const login = async (request: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) => {
  try {
    const parsed = LoginSchema.parse(request.body);

    const user = await User.findOne({ username: parsed.username });
    if (!user) {
      return reply.status(401).send({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(parsed.password, user.password);
    if (!isMatch) {
      return reply.status(401).send({ error: 'Invalid username or password' });
    }

    const token = await reply.jwtSign(
      { id: user._id, username: user.username },
      { expiresIn: '7d' }
    );

    reply.send({ token });
  } catch (error) {
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
    reply.status(500).send({ error: 'Login failed due to server error' });
  }
};
