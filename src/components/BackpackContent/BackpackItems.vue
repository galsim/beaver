<script setup lang="ts">
import BackpackItem from '@/components/BackpackContent/BackpackItem.vue'
import BackpackItemWrapper from '@/components/BackpackContent/BackpackItemWrapper.vue'

defineProps<{
  items: unknown[]
}>()

</script>

<template>
    <BackpackItemWrapper v-for="(item, index) in items" :key="index">
        <BackpackItem v-if="item !== undefined"></BackpackItem>
    </BackpackItemWrapper>
</template>

<style scoped lang="scss">

</style>
