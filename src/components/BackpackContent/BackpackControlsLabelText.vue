<script setup lang="ts">
import { type BackpackFilter, BackpackFilterValues } from '@/consts/backpack-filters.ts'

defineProps<{activeFilter: BackpackFilter | undefined}>()
</script>

<template>
    <div class="backpack-main__label-text" v-if="activeFilter === BackpackFilterValues.ARMOR">ARMOR</div>
    <div class="backpack-main__label-text" v-else-if="activeFilter === BackpackFilterValues.MISCELLANEOUS">MISCELLANEOUS</div>
    <div class="backpack-main__label-text" v-else-if="activeFilter === BackpackFilterValues.WEAPON">WEAPONS</div>
    <div class="backpack-main__label-text" v-else>ALL ITEMS</div>
</template>

<style scoped lang="scss">
.backpack-main__label-text {
  font-weight: 400;
  font-size: 20px;
}
</style>
