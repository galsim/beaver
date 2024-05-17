<script setup lang="ts">
defineProps<{charges: number, maxCharges: number}>()
</script>

<template>
    <div class="backpack-item-charges">
        {{ charges }} / {{ maxCharges }}
    </div>
</template>

<style scoped lang="scss">
.backpack-item-charges {
  position: absolute;
  padding: 5px;
  top: 0;
  left: 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
  z-index: 2;
  width: 60px;
  height: 40px;
  background: linear-gradient(to right bottom, rgba(6, 6, 6, 0.25) 50%, transparent 50%);
}
</style>
