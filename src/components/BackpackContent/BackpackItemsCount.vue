<script setup lang="ts">
defineProps<{ count: number }>()
</script>

<template>
    <div class="backpack-main__label-count">{{ count }} / 100</div>
</template>

<style scoped lang="scss">
.backpack-main__label-count {
  font-size: 19px;
  font-weight: 500;
}
</style>
