<template>
    <div :class="classes" @click="onClick">
        <div class="control-button__icon">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue'

const props = withDefaults(defineProps<{
  isOutlined?: boolean
  isActive?: boolean
}>(), {
    isOutlined: false,
    isActive: false,
})

const emits = defineEmits(['click'])

const onClick = () => emits('click')

const { isOutlined, isActive } = toRefs(props)

const classes = computed(() => ([
    'control-button',
    { 'control-button__outlined': isOutlined.value },
    { 'control-button__active': isActive.value },
]))
</script>

<style scoped lang="scss">
.control-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: rgba(255, 255, 255, .5);

  &:hover,
  &__active {
    color: #ffffff;
  }

  &:hover {
    cursor: pointer;
  }

  &__outlined {
    outline: 2px solid #454545;
  }
}
</style>
