<script setup>
import CardapioSemContexto from './sem-contexto/CardapioSemContexto.vue'
import CardapioComContexto from './com-contexto/CardapioComContexto.vue'
</script>

<template>
  <main class="pagina-contexto">
    <h1>Contexto no Vue</h1>
    <p class="intro">Os dois cardápios fazem a mesma coisa. Muda o caminho que o pedido percorre.</p>

    <section class="comparacao">
      <article class="bloco bloco-sem">
        <h2>Sem contexto</h2>
        <p class="caminho">ItemCardapio → ListaSemContexto → CardapioSemContexto: o evento sobe repassado.</p>
        <CardapioSemContexto />
      </article>

      <article class="bloco bloco-com">
        <h2>Com contexto (provide / inject)</h2>
        <p class="caminho">CardapioComContexto faz provide; ItemComContexto e ResumoComContexto fazem inject.</p>
        <CardapioComContexto />
      </article>
    </section>

    <a class="voltar" href="/">Voltar ao cardápio principal</a>
  </main>
</template>
