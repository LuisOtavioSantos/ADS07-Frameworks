import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PedidoLocalService } from './pedido-local.service';

@Component({
  selector: 'app-resumo-com-contexto',
  imports: [DecimalPipe],
  template: `
    <p class="resumo">
      {{ pedido.quantidade() }} item(ns) · Total: R$ {{ pedido.total() | number: '1.2-2' }}
    </p>
    <button class="botao-borda" (click)="pedido.limpar()">Limpar pedido</button>
  `,
})
export class ResumoComContexto {
  protected readonly pedido = inject(PedidoLocalService);
}
