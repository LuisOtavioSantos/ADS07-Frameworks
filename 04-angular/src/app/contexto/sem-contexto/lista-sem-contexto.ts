import { Component, output } from '@angular/core';
import { Item, itens } from '../../cardapio/itens';
import { ItemCardapio } from '../../cardapio/item-cardapio/item-cardapio';

@Component({
  selector: 'app-lista-sem-contexto',
  imports: [ItemCardapio],
  template: `
    <ul class="grade-meia">
      @for (item of itens; track item.id) {
        <li><app-item-cardapio [item]="item" (adicionar)="adicionar.emit($event)" /></li>
      }
    </ul>
  `,
})
export class ListaSemContexto {
  protected readonly itens = itens;
  adicionar = output<Item>();
}
