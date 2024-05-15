<script setup lang="ts">
import NavigatorButton from '@/components/InventoryNavigator/NavigatorButton.vue'
import CrossIcon from '@/svg/cross.svg'
import { type InventoryView, InventoryViewValues } from '@/consts/inventory-view.js'

defineProps<{ modelValue: InventoryView }>()
</script>

<template>
    <div class="inventory-navigator">
        <NavigatorButton
            :is-active="modelValue === InventoryViewValues.BACKPACK"
        >
            BACKPACK
        </NavigatorButton>
        <NavigatorButton
            :is-active="modelValue === InventoryViewValues.NEXUS"
        >
            NEXUS
        </NavigatorButton>
        <NavigatorButton is-highlight>
            <CrossIcon />
        </NavigatorButton>
    </div>
</template>

<style>
.inventory-navigator {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 60px;
}
</style>
