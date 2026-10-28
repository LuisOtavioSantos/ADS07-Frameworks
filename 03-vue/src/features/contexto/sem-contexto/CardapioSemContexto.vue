<script setup>
import { ref } from 'vue'
import ListaSemContexto from './ListaSemContexto.vue'
import ResumoSemContexto from './ResumoSemContexto.vue'

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
  <ListaSemContexto @adicionar="adicionar" />
  <ResumoSemContexto :quantidade="quantidade" :total="total" @limpar="limpar" />
</template>
