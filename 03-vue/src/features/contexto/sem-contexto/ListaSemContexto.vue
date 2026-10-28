<script setup>
import ItemCardapio from '../../cardapio/components/ItemCardapio.vue'
import { itens } from '../../cardapio/itens.js'

const emit = defineEmits(['adicionar'])
</script>

<template>
  <ul class="grade-meia">
    <ItemCardapio
      v-for="item in itens"
      :key="item.id"
      :item="item"
      @adicionar="emit('adicionar', $event)"
    />
  </ul>
</template>
