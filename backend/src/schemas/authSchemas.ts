import { z } from 'zod';
import 'zod-openapi/extend';

export const SignupSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(15, 'Username must be at most 15 characters')
    .openapi({ example: 'exampleuser' }),

  password: z.string()
    .min(7, 'Password must be at least 7 characters')
    .max(15, 'Password must be at most 15 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .openapi({ example: 'P@ssword1' }),

  confirmPassword: z.string()
    .min(7)
    .max(15)
    .openapi({ example: 'P@ssword1' }),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
  .openapi({ title: 'SignupSchema' });

export const LoginSchema = z.object({
  username: z.string()
    .min(3, 'Username is required')
    .openapi({ example: 'exampleuser' }),

  password: z.string()
    .min(1, 'Password is required')
    .openapi({ example: 'password123' }),
})
  .openapi({ title: 'LoginSchema' });

export type SignupInput = z.infer<typeof SignupSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
