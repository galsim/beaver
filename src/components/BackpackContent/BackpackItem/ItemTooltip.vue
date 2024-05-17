<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = defineProps<{name: string, x: number, y: number}>()
const { x, y } = toRefs(props)
const tooltipStyle = computed(() => ({
    left: `${x.value + 10}px`,
    top: `${y.value + 10}px`,
}))
</script>

<template>
    <div class="item-tooltip"
         :style="tooltipStyle">
        {{ name }}
    </div>
</template>

<style scoped lang="scss">
.item-tooltip {
  position: absolute;
  border: 1px solid #454545;
  border-radius: 0 10px 10px 10px;
  color: #ffffff;
  background: #1A1A1A;
  white-space: nowrap;
  text-align: center;
  padding: 5px 10px;
  z-index: 10000
}
</style>
