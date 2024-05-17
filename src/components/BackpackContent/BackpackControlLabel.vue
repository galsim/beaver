<script lang="ts" setup>
import BackpackControlsLabelText from '@/components/BackpackContent/BackpackControlsLabelText.vue'
import BackpackItemsLabelCount from '@/components/BackpackContent/BackpackItemsLabelCount.vue'
import type { InventoryType } from '@/consts/inventory-type.js'

defineProps<{
  activeFilter: InventoryType | undefined,
  isLoading: boolean,
  count: number
}>()

</script>

<template>
    <div class="backpack-main__label">
        <BackpackControlsLabelText :active-filter="activeFilter"/>

        <BackpackItemsLabelCount
            v-if="!isLoading"
            :count="count"
        />
    </div>
</template>

<style lang="scss">
.backpack-main__label {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
}
</style>
