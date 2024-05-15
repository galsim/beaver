<script setup lang="ts">
import TileIcon from '@/svg/tile.svg'
import ArmorIcon from '@/svg/armor.svg'
import WeaponIcon from '@/svg/weapon.svg'
import MiscellaneousIcon from '@/svg/miscellaneous.svg'
import ControlButton from '@/components/BackpackContent/ControlButton.vue'
import { toRefs } from 'vue'
import { type BackpackFilter, BackpackFilterValues } from '@/consts/backpack-filters.js'

const props = defineProps<{
  modelValue: BackpackFilter | undefined,
  currentFilter: BackpackFilter | undefined
}>()
const { modelValue } = toRefs(props)
const emit = defineEmits<{(e: 'update:modelValue', value: BackpackFilter | undefined): void }>()
const applyFilter = (newFilter: BackpackFilter | undefined) => {
    emit('update:modelValue', newFilter)
}
</script>

<template>
    <ControlButton
        :is-active="modelValue === currentFilter"
        @click="applyFilter(currentFilter)"
    >
        <TileIcon v-if="currentFilter === undefined" />
        <ArmorIcon v-else-if="currentFilter === BackpackFilterValues.ARMOR" />
        <WeaponIcon v-else-if="currentFilter === BackpackFilterValues.WEAPON" />
        <MiscellaneousIcon v-else-if="currentFilter === BackpackFilterValues.MISCELLANEOUS" />
    </ControlButton>
</template>
