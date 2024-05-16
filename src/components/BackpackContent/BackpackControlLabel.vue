<script lang="ts" setup>
import type { BackpackFilter } from '@/consts/backpack-filters.ts'
import BackpackControlsLabelText from '@/components/BackpackContent/BackpackControlsLabelText.vue'
import BackpackItemsLabelCount from '@/components/BackpackContent/BackpackItemsLabelCount.vue'

defineProps<{
  activeFilter: BackpackFilter | undefined,
  isLoading: boolean,
  count: number
}>()

</script>

<template>
    <div class="backpack-main__label">
        <BackpackControlsLabelText :active-filter="activeFilter"></BackpackControlsLabelText>

        <BackpackItemsLabelCount
            v-if="!isLoading"
            :count="count"
        ></BackpackItemsLabelCount>
    </div>
</template>

<style lang="scss">
.backpack-main__label {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
}
</style>
