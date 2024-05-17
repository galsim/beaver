<script setup lang="ts">
import BackpackItem from '@/components/BackpackContent/BackpackItem/BackpackItem.vue'
import BackpackItemWrapper from '@/components/BackpackContent/BackpackItemWrapper.vue'
import type { InventoryItem } from '@/types/inventory-state.js'

defineProps<{
  items: InventoryItem[]
}>()

</script>

<template>
    <BackpackItemWrapper v-for="(item, index) in items"
                         :key="index">
        <BackpackItem v-if="item !== undefined"
                      :item="item"/>
    </BackpackItemWrapper>
</template>

<style scoped lang="scss">

</style>
