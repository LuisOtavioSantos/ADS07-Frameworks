import { Component, inject, input } from '@angular/core';
import { Item } from '../../cardapio/itens';
import { ItemCardapio } from '../../cardapio/item-cardapio/item-cardapio';
import { PedidoLocalService } from './pedido-local.service';

@Component({
  selector: 'app-item-com-contexto',
  imports: [ItemCardapio],
  template: `<app-item-cardapio [item]="item()" (adicionar)="pedido.adicionar($event)" />`,
})
export class ItemComContexto {
  item = input.required<Item>();
  protected readonly pedido = inject(PedidoLocalService);
}
