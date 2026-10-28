<script setup>
import ItemComContexto from './ItemComContexto.vue'
import { itens } from '../../cardapio/itens.js'
</script>

<template>
  <ul class="grade-meia">
    <ItemComContexto v-for="item in itens" :key="item.id" :item="item" />
  </ul>
</template>
