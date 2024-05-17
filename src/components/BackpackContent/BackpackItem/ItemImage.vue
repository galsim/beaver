<script setup lang="ts">
defineProps<{src: string}>()
</script>

<template>
    <img class="backpack-item-image" :src="src">
</template>

<style scoped lang="scss">
.backpack-item-image {
  display: block;
  margin: 0 auto;
  padding-top: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  object-fit: contain;
}
</style>
