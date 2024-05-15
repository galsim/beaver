<script setup lang="ts">
import InventoryNavigator from '@/components/InventoryNavigator/InventoryNavigator.vue'
import { ref } from 'vue'
import { type InventoryView, InventoryViewValues } from '@/consts/inventory-view.ts'

const activeTab = ref<InventoryView>(InventoryViewValues.BACKPACK)
</script>

<template>
    <div class="inventory">
        <InventoryNavigator v-model="activeTab"></InventoryNavigator>
    </div>
</template>

<style scoped lang="scss">

</style>
