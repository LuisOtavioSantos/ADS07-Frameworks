import { Component } from '@angular/core';
import { PedidoLocalService } from './pedido-local.service';
import { ListaComContexto } from './lista-com-contexto';
import { ResumoComContexto } from './resumo-com-contexto';

@Component({
  selector: 'app-cardapio-com-contexto',
  imports: [ListaComContexto, ResumoComContexto],
  providers: [PedidoLocalService],
  template: `
    <app-lista-com-contexto />
    <app-resumo-com-contexto />
  `,
})
export class CardapioComContexto {}
