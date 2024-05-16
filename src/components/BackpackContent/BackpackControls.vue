<script setup lang="ts">
import DeleteButton from '@/components/BackpackContent/DeleteButton.vue'
import { computed, toRefs } from 'vue'
import BackpackFilter from '@/components/BackpackContent/BackpackFilter.vue'
import { InventoryTypeValues } from '@/consts/inventory-type.js'

const props = defineProps<{modelValue: BackpackFilter | undefined}>()
const { modelValue } = toRefs(props)
const emit = defineEmits<{(e: 'update:modelValue', value: BackpackFilter | undefined): void }>()
const model = computed({
    get: () => modelValue.value,
    set: (newValue) => {
        emit('update:modelValue', newValue)
    },
})
</script>

<template>
    <div class="backpack-controls">
        <BackpackFilter
            class="backpack-controls__item"
            v-model="model"
            :current-filter="undefined"
        />
        <BackpackFilter
            class="backpack-controls__item"
            v-model="model"
            :current-filter="InventoryTypeValues.ARMOR"
        />
        <BackpackFilter
            class="backpack-controls__item"
            v-model="model"
            :current-filter="InventoryTypeValues.WEAPON"
        />
        <BackpackFilter
            class="backpack-controls__item"
            v-model="model"
            :current-filter="InventoryTypeValues.MISCELLANEOUS"
        />

        <DeleteButton class="backpack-controls__last-item" />
    </div>
</template>

<style scoped lang="scss">
.backpack-controls {
  padding: 15px 7px;
  background: #393839;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;

  &__item {
    margin-bottom: 10px;
  }

  &__last-item {
    margin-top: auto;
  }
}
</style>
