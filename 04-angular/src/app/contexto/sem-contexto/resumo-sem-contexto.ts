import { Component, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-resumo-sem-contexto',
  imports: [DecimalPipe],
  template: `
    <p class="resumo">{{ quantidade() }} item(ns) · Total: R$ {{ total() | number: '1.2-2' }}</p>
    <button class="botao-borda" (click)="limpar.emit()">Limpar pedido</button>
  `,
})
export class ResumoSemContexto {
  quantidade = input.required<number>();
  total = input.required<number>();
  limpar = output<void>();
}
