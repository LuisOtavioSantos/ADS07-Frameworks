import { Component } from '@angular/core';
import { CardapioSemContexto } from './sem-contexto/cardapio-sem-contexto';
import { CardapioComContexto } from './com-contexto/cardapio-com-contexto';

@Component({
  selector: 'app-root',
  imports: [CardapioSemContexto, CardapioComContexto],
  templateUrl: './pagina-contexto.html',
  styleUrl: './pagina-contexto.css',
})
export class PaginaContexto {}
