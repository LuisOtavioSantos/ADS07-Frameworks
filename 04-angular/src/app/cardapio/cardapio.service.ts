import { Injectable, signal } from '@angular/core';
import { Item, itens } from './itens';

@Injectable({ providedIn: 'root' })
export class CardapioService {
  readonly itens = itens;
  readonly quantidade = signal(0);
  readonly total = signal(0);

  adicionar(item: Item) {
    this.quantidade.update((valor) => valor + 1);
    this.total.update((valor) => valor + item.preco);
  }

  limpar() {
    this.quantidade.set(0);
    this.total.set(0);
  }
}
