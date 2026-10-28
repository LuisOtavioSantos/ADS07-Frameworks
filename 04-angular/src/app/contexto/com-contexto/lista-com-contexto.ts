import { Component } from '@angular/core';
import { itens } from '../../cardapio/itens';
import { ItemComContexto } from './item-com-contexto';

@Component({
  selector: 'app-lista-com-contexto',
  imports: [ItemComContexto],
  template: `
    <ul class="grade-meia">
      @for (item of itens; track item.id) {
        <li><app-item-com-contexto [item]="item" /></li>
      }
    </ul>
  `,
})
export class ListaComContexto {
  protected readonly itens = itens;
}
