<script setup>
import { ref } from 'vue'
import ItemCardapio from './ItemCardapio.vue'
import { itens } from '../itens.js'

const quantidade = ref(0)
const total = ref(0)

function adicionar(item) {
  quantidade.value = quantidade.value + 1
  total.value = total.value + item.preco
}

function limpar() {
  quantidade.value = 0
  total.value = 0
}
</script>

<template>
  <h2>Cardápio</h2>
  <ul class="grade">
    <ItemCardapio v-for="item in itens" :key="item.id" :item="item" @adicionar="adicionar" />
  </ul>
  <p class="resumo">{{ quantidade }} item(ns) · Total: R$ {{ total.toFixed(2) }}</p>
  <button @click="limpar">Limpar pedido</button>
</template>

<style>.grade{background-color: rgb(35, 46, 95);}</style>
