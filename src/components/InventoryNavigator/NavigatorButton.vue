<template>
    <div :class="classes">
        <div>
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, type HTMLAttributes, toRefs } from 'vue'

const props = withDefaults(defineProps<{
  isActive?: boolean
  isHighlight?: boolean
}>(), {
    isActive: false,
    isHighlight: false,
})

const { isActive, isHighlight } = toRefs(props)

const classes = computed<HTMLAttributes['class']>(() => ([
    'inventory-navigator__btn',
    { 'inventory-navigator__btn__active': isActive.value },
    { 'inventory-navigator__btn__highlight': isHighlight.value },
]))
</script>

<style scoped lang="scss">
.inventory-navigator__btn {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, .47);
  font-size: 24px;
  font-weight: 400;
  border: 1px solid black;
  background: #393839;

  &:hover,
  &__active {
    color: #fff;
  }

  &__active,
  &__highlight {
    background: #242223;
  }

  &:hover {
  cursor: pointer
  }
}
</style>
