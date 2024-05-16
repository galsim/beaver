<script setup lang="ts">
import { computed, ref } from 'vue'
import BackpackControls from '@/components/BackpackContent/BackpackControls.vue'
import type { BackpackFilter } from '@/consts/backpack-filters.ts'
import BackpackControlLabel from '@/components/BackpackContent/BackpackControlLabel.vue'
import BackpackItemsLoader from '@/components/BackpackContent/BackpackItemsLoader.vue'
import BackpackItems from '@/components/BackpackContent/BackpackItems.vue'
import { MIN_BACKPACK_ITEMS_LENGTH } from '@/consts/min-backpack-items.ts'

const activeFilter = ref<BackpackFilter>(undefined)
const isLoading = ref(true)
const count = ref(0)
const items = ref([])
const filledItems = computed(() => {
    const itemsLength = items.value.length
    if (itemsLength < 40) {
        return items.value.concat(Array.from({ length: MIN_BACKPACK_ITEMS_LENGTH - itemsLength }))
    }

    return items.value
})
</script>

<template>
    <div class="backpack-content">
        <BackpackControls v-model="activeFilter"></BackpackControls>

        <div class="backpack-main">
            <BackpackControlLabel
                :active-filter="activeFilter"
                :is-loading="isLoading"
                :count="count"
            />

            <div class="backpack-main__grid">
                <BackpackItemsLoader v-if="isLoading"></BackpackItemsLoader>
                <BackpackItems v-else :items="filledItems"></BackpackItems>
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
    grid-auto-rows: 95px;
  }
}
</style>
