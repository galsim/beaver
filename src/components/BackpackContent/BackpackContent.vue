<script setup lang="ts">
import { ref } from 'vue'
import BackpackControls from '@/components/BackpackContent/BackpackControls.vue'
import type { BackpackFilter } from '@/consts/backpack-filters.ts'

const activeFilter = ref<BackpackFilter>(undefined)
</script>

<template>
    <div class="backpack-content">
        <BackpackControls v-model="activeFilter"></BackpackControls>
    </div>
</template>

<style scoped lang="scss">
.backpack-content {
  display: grid;
  grid-template-columns: 65px 1fr;
}
</style>
