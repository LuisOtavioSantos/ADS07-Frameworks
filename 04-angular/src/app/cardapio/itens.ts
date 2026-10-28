export interface Item {
  id: number;
  nome: string;
  preco: number;
}

export const itens: Item[] = [
  { id: 1, nome: 'Pizza', preco: 45.0 },
  { id: 2, nome: 'X-Bacon', preco: 28.9 },
  { id: 3, nome: 'X-Burguer', preco: 24.9 },
  { id: 4, nome: 'Refri', preco: 7.0 },
  { id: 5, nome: 'Salgado', preco: 8.5 },
  { id: 6, nome: 'Pastel', preco: 12.0 },
];
