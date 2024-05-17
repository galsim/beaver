<script setup lang="ts">
import BackpackItemWrapper from '@/components/BackpackContent/BackpackItemWrapper.vue'
import { MIN_BACKPACK_ITEMS_LENGTH } from '@/consts/min-backpack-items.ts'

const emptyItems = Array.from({ length: MIN_BACKPACK_ITEMS_LENGTH })
</script>

<template>
    <BackpackItemWrapper v-for="(_, index) in emptyItems"
                         :key="index"
                         is-loading/>
</template>

<style scoped lang="scss">

</style>
