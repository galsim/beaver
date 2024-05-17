<script setup lang="ts">
import InventoryNavigator from '@/components/InventoryNavigator/InventoryNavigator.vue'
import { ref } from 'vue'
import { type InventoryView, InventoryViewValues } from '@/consts/inventory-view.ts'
import InventoryContent from '@/components/InventoryContent.vue'

const activeTab = ref<InventoryView>(InventoryViewValues.BACKPACK)
</script>

<template>
    <div class="inventory">
        <InventoryNavigator v-model="activeTab"/>
        <InventoryContent :active-tab="activeTab"/>
    </div>
</template>

<style scoped lang="scss">

</style>
