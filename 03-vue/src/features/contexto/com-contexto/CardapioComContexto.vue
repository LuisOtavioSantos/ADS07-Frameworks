<script setup>
import { ref, provide } from 'vue'
import ListaComContexto from './ListaComContexto.vue'
import ResumoComContexto from './ResumoComContexto.vue'

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

provide('pedido', { quantidade, total, adicionar, limpar })
</script>

<template>
  <ListaComContexto />
  <ResumoComContexto />
</template>
