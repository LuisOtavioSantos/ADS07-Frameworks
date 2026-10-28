import { Component, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Item } from '../itens';

@Component({
  selector: 'app-item-cardapio',
  imports: [DecimalPipe],
  templateUrl: './item-cardapio.html',
})
export class ItemCardapio {
  item = input.required<Item>();
  adicionar = output<Item>();
}
