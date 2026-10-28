import { create } from 'zustand';

export const usePedido = create((set) => ({
  quantidade: 0,
  total: 0,

  adicionar: (item) =>
    set((estado) => ({
      quantidade: estado.quantidade + 1,
      total: estado.total + item.preco,
    })),

  limpar: () => set({ quantidade: 0, total: 0 }),
}));
