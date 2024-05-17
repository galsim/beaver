<script setup lang="ts">
import { type InventoryType, InventoryTypeValues } from '@/consts/inventory-type.js'

defineProps<{activeFilter: InventoryType | undefined}>()
</script>

<template>
    <div class="backpack-main__label-text"
         v-if="activeFilter === InventoryTypeValues.ARMOR">
        ARMOR
    </div>
    <div class="backpack-main__label-text"
         v-else-if="activeFilter === InventoryTypeValues.MISCELLANEOUS">
        MISCELLANEOUS
    </div>
    <div class="backpack-main__label-text"
         v-else-if="activeFilter === InventoryTypeValues.WEAPON">
        WEAPONS
    </div>
    <div class="backpack-main__label-text"
         v-else>
        ALL ITEMS
    </div>
</template>

<style scoped lang="scss">
.backpack-main__label-text {
  font-weight: 400;
  font-size: 20px;
}
</style>
