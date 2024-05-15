<script setup lang="ts">
import { ref } from 'vue'
import BackpackControls from '@/components/BackpackContent/BackpackControls.vue'
import type { BackpackFilter } from '@/consts/backpack-filters.ts'
import BackpackControlLabel from '@/components/BackpackContent/BackpackControlLabel.vue'

const activeFilter = ref<BackpackFilter>(undefined)
const isLoading = ref(false)
const count = ref(0)
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
}
</style>
