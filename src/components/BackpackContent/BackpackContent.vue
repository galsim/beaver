<script setup lang="ts">
import { computed, ref } from 'vue'
import BackpackControls from '@/components/BackpackContent/BackpackControls.vue'
import BackpackControlLabel from '@/components/BackpackContent/BackpackControlLabel.vue'
import BackpackItemsLoader from '@/components/BackpackContent/BackpackItemsLoader.vue'
import BackpackItems from '@/components/BackpackContent/BackpackItems.vue'
import { MIN_BACKPACK_ITEMS_LENGTH } from '@/consts/min-backpack-items.ts'
import { useInventoryState } from '@/queries/inventory-state.ts'
import type { InventoryType } from '@/consts/inventory-type.js'

const activeFilter = ref<InventoryType | undefined>(undefined)
const { isLoading, data: inventory } = useInventoryState()
const items = computed(() => {
    if (inventory.value === undefined) {
        return []
    }

    if (activeFilter.value !== undefined) {
        return inventory.value.inventory.filter((item) => item.type === activeFilter.value)
    }

    return inventory.value.inventory
})
const filledItems = computed(() => {
    const itemsLength = items.value.length
    if (itemsLength < 40) {
        return (items.value).concat(Array.from({ length: MIN_BACKPACK_ITEMS_LENGTH - itemsLength }))
    }

    return items.value
})
</script>

<template>
    <div class="backpack-content">
        <BackpackControls v-model="activeFilter"/>

        <div class="backpack-main">
            <BackpackControlLabel
                :active-filter="activeFilter"
                :is-loading="isLoading"
                :count="items.length"
            />

            <div class="backpack-main__grid">
                <BackpackItemsLoader v-if="isLoading"/>
                <BackpackItems v-else
                               :items="filledItems"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.backpack-content {
  display: grid;
  grid-template-columns: 65px 1fr;
  background-color: #242223;
}

.backpack-main {
  padding: 15px;

  &__grid {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 100px;
    max-height: 800px;
    overflow-y: auto;
  }
}
</style>
