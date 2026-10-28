import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CardapioService } from '../cardapio.service';
import { ItemCardapio } from '../item-cardapio/item-cardapio';

@Component({
  selector: 'app-lista-cardapio',
  imports: [ItemCardapio, DecimalPipe],
  templateUrl: './lista-cardapio.html',
})
export class ListaCardapio {
  protected readonly cardapio = inject(CardapioService);
}
