<script setup lang="ts">
defineProps<{count: number}>()
</script>

<template>
    <div class="backpack-item-count">
        x{{ count}}
    </div>
</template>

<style scoped lang="scss">
.backpack-item-count{
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
}
</style>
