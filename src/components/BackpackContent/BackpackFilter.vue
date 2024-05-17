<script setup lang="ts">
import TileIcon from '@/svg/tile.svg'
import ArmorIcon from '@/svg/armor.svg'
import WeaponIcon from '@/svg/weapon.svg'
import MiscellaneousIcon from '@/svg/miscellaneous.svg'
import ControlButton from '@/components/BackpackContent/ControlButton.vue'
import { toRefs } from 'vue'
import { type InventoryType, InventoryTypeValues } from '@/consts/inventory-type.ts'

const props = defineProps<{
  modelValue: InventoryType | undefined,
  currentFilter: InventoryType | undefined
}>()
const { modelValue } = toRefs(props)
const emit = defineEmits<{(e: 'update:modelValue', value: InventoryType | undefined): void }>()
const applyFilter = (newFilter: InventoryType | undefined) => {
    emit('update:modelValue', newFilter)
}
</script>

<template>
    <ControlButton
        :is-active="modelValue === currentFilter"
        @click="applyFilter(currentFilter)"
    >
        <TileIcon v-if="currentFilter === undefined" />
        <ArmorIcon v-else-if="currentFilter === InventoryTypeValues.ARMOR" />
        <WeaponIcon v-else-if="currentFilter === InventoryTypeValues.WEAPON" />
        <MiscellaneousIcon v-else-if="currentFilter === InventoryTypeValues.MISCELLANEOUS" />
    </ControlButton>
</template>
