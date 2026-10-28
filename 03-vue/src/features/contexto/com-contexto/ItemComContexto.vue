<script setup>
import { inject } from 'vue'
import ItemCardapio from '../../cardapio/components/ItemCardapio.vue'

defineProps({
  item: { type: Object, required: true },
})

const { adicionar } = inject('pedido')
</script>

<template>
  <ItemCardapio :item="item" @adicionar="adicionar" />
</template>
