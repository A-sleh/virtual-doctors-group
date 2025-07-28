import z from 'zod';

export const registerInputSchema = z.object({
  name: z.string().min(1, 'You should enter your full name'),
  personId: z.string().min(10, 'You should enter your perosn id'),
  contactNumber: z.number().lt(10, 'The number most be equal 10 numbers'),
  birthDate: z.date(),
  gender: z.enum(['male', 'female']).default('male'),
  profileImage: z.string().optional(),
  email: z.string().min(1, 'email is required').email('Invalid email'),
  password: z.string().min(5, 'Password is required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

// const registerWithEmailAndPassword = (
//   data: RegisterInput,
// ): Promise<AuthResponse> => {
//   return api.post('/auth/register', data);
// };
