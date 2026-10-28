import { Component } from '@angular/core';
import { ListaCardapio } from './cardapio/lista-cardapio/lista-cardapio';

@Component({
  selector: 'app-root',
  imports: [ListaCardapio],
  templateUrl: './app.html',
})
export class App {}
