import { z } from 'zod';

export const esquemaPedido = z.object({
  nome: z.string().trim().min(3, 'Informe o nome (mínimo de 3 letras).'),
  telefone: z.string().regex(/^\d{10,11}$/, 'Telefone com DDD, só números (10 ou 11 dígitos).'),
});
