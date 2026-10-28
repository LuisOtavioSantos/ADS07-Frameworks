<script setup>
defineProps({
  quantidade: { type: Number, required: true },
  total: { type: Number, required: true },
})

const emit = defineEmits(['limpar'])
</script>

<template>
  <p class="resumo">{{ quantidade }} item(ns) · Total: R$ {{ total.toFixed(2) }}</p>
  <button class="botao-borda" @click="emit('limpar')">Limpar pedido</button>
</template>
