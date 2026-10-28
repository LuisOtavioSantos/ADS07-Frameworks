<script setup>
defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['adicionar'])
</script>

<template>
  <li class="card">
    <h3>{{ item.nome }}</h3>
    <p>R$ {{ item.preco.toFixed(2) }}</p>
    <button @click="emit('adicionar', item)">Adicionar</button>
  </li>
</template>
