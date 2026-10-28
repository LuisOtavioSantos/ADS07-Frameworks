import { Component, signal } from '@angular/core';
import { Item } from '../../cardapio/itens';
import { ListaSemContexto } from './lista-sem-contexto';
import { ResumoSemContexto } from './resumo-sem-contexto';

@Component({
  selector: 'app-cardapio-sem-contexto',
  imports: [ListaSemContexto, ResumoSemContexto],
  template: `
    <app-lista-sem-contexto (adicionar)="adicionar($event)" />
    <app-resumo-sem-contexto [quantidade]="quantidade()" [total]="total()" (limpar)="limpar()" />
  `,
})
export class CardapioSemContexto {
  protected readonly quantidade = signal(0);
  protected readonly total = signal(0);

  adicionar(item: Item) {
    this.quantidade.update((valor) => valor + 1);
    this.total.update((valor) => valor + item.preco);
  }

  limpar() {
    this.quantidade.set(0);
    this.total.set(0);
  }
}
