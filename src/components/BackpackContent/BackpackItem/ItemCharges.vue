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
  top: 5px;
  left: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
  z-index: 2;

  &::before {
    position: absolute;
    top: -20px;
    left: -25px;
    content: '';
    display: block;
    z-index: -1;
    transform: rotate(-30deg);
    width: 120px;
    height: 40px;
    background: rgba(6, 6, 6, 0.65);
    opacity: .25;
  }
}
</style>
