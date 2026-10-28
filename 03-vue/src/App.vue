<script setup>
import { ListaCardapio } from './features/cardapio'
</script>

<template>
  <header class="topo">
    <p class="marca">Sabor da Esquina</p>
    <p>Feito com Vue</p>
  </header>
  <main>
    <section class="secao">
      <h1>Olá, estudante! Este é um componente Vue.</h1>
    </section>
    <section class="secao">
      <ListaCardapio />
      <a href="/contexto">Contexto</a>
    </section>
  </main>
  <footer class="rodape">© 2026 Sabor da Esquina · Exemplo da Aula 3</footer>
</template>
