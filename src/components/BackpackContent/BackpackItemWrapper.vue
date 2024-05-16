<script setup lang="ts">
import { computed, type HTMLAttributes, toRefs } from 'vue'

const props = withDefaults(defineProps<{ isLoading?: boolean }>(), { isLoading: false })
const { isLoading } = toRefs(props)
const classes = computed<HTMLAttributes['style']>(() => ([
    'backpack-item-wrapper',
    { 'backpack-item-wrapper__loading': isLoading.value },
]))
</script>

<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.backpack-item-wrapper {
  background-color: #1A1A1A;
  border: 1px solid #454545;

  &__loading {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
      animation: loading 1.5s infinite;
    }
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
