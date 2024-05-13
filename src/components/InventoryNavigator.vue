<script setup lang="ts">
import NavigatorButton from '@/components/NavigatorButton.vue'
import CrossIcon from '@/svg/cross.svg'
</script>

<template>
    <div class="inventory-navigator">
        <NavigatorButton is-active>BACKPACK</NavigatorButton>
        <NavigatorButton>NEXUS</NavigatorButton>
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
