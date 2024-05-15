<script lang="ts" setup>
import type { BackpackFilter } from '@/consts/backpack-filters.ts'
import BackpackControlsLabel from '@/components/BackpackContent/BackpackControlsLabel.vue'
import BackpackItemsCount from '@/components/BackpackContent/BackpackItemsCount.vue'

defineProps<{
  activeFilter: BackpackFilter | undefined,
  isLoading: boolean,
  count: number
}>()

</script>

<template>
    <div class="backpack-main__label">
        <BackpackControlsLabel :active-filter="activeFilter"></BackpackControlsLabel>

        <BackpackItemsCount
            v-if="!isLoading"
            :count="count"
        ></BackpackItemsCount>
    </div>
</template>

<style lang="scss">
.backpack-main__label {
  display: flex;
  justify-content: space-between;
}
</style>
