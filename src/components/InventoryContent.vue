<script setup lang="ts">
import { type InventoryView, InventoryViewValues } from '@/consts/inventory-view.ts'
import BackpackContent from '@/components/BackpackContent/BackpackContent.vue'
import NexusContent from '@/components/NexusContent.vue'

defineProps<{activeTab: InventoryView}>()
</script>

<template>
    <div class="inventory-content">
        <BackpackContent v-if="activeTab === InventoryViewValues.BACKPACK"/>
        <NexusContent v-if="activeTab === InventoryViewValues.NEXUS"/>
    </div>
</template>

<style scoped lang="scss">
.inventory-content {
  border: 1px solid black;
}
</style>
