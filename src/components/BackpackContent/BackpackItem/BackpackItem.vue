<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { InventoryTypeValues } from '@/consts/inventory-type.ts'
import ItemImage from '@/components/BackpackContent/BackpackItem/ItemImage.vue'
import ItemCharges from '@/components/BackpackContent/BackpackItem/ItemCharges.vue'
import ItemCount from '@/components/BackpackContent/BackpackItem/ItemCount.vue'
import ItemCooldown from '@/components/BackpackContent/BackpackItem/ItemCooldown.vue'
import { useTooltip } from '@/composables/tooltip.ts'
import ItemTooltip from '@/components/BackpackContent/BackpackItem/ItemTooltip.vue'
import type { InventoryItem } from '@/types/inventory-state.js'

const props = defineProps<{item: InventoryItem}>()
const { item } = toRefs(props)
const classes = computed(() => ([
    'backpack-item-content',
    { 'backpack-item-content__blue': item.value.type === InventoryTypeValues.ARMOR },
    { 'backpack-item-content__purple': item.value.type === InventoryTypeValues.WEAPON },
]))
const backpackContainer = ref<HTMLElement | null>(null)
const { isTooltipVisible, x, y } = useTooltip(backpackContainer)
</script>

<template>
    <div :class="classes" ref="backpackContainer">
        <ItemTooltip v-if="isTooltipVisible" :name="item.name" :x="x" :y="y"></ItemTooltip>
        <ItemImage :src="item.imageUrl"></ItemImage>
        <ItemCharges
            v-if="item.charges !== undefined && item.maxCharges !== undefined"
            :charges="item.charges"
            :maxCharges="item.maxCharges"
        ></ItemCharges>
        <ItemCount
            v-if="item.count !== undefined"
            :count="item.count"
        ></ItemCount>
        <ItemCooldown v-if="item.cooldown" :cooldown="item.cooldown"></ItemCooldown>
    </div>
</template>

<style scoped lang="scss">
.backpack-item-content {
  position: relative;
  height: 100%;

  &__blue {
    background: radial-gradient(circle at center, #367CCE 0, #005FCE 20%, transparent 90%);
  }
  &__purple {
    background: radial-gradient(circle at center, #7F59CE 0 , #7F59CE 20%, transparent 90%);
  }
}
</style>
