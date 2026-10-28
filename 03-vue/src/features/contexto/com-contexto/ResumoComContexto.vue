<script setup>
import { inject } from 'vue'

const { quantidade, total, limpar } = inject('pedido')
</script>

<template>
  <p class="resumo">{{ quantidade }} item(ns) · Total: R$ {{ total.toFixed(2) }}</p>
  <button class="botao-borda" @click="limpar">Limpar pedido</button>
</template>
