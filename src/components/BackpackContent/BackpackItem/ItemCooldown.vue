<script setup lang="ts">
import TimerIcon from '@/svg/timer.svg'
import { toRefs } from 'vue'
import { useTimeDifference } from '@/composables/time-difference.ts'

const props = defineProps<{cooldown: number}>()
const { cooldown } = toRefs(props)
const timeDifference = useTimeDifference(cooldown)
</script>

<template>
    <div class="backpack-item-cooldown" v-if="timeDifference >0">
        <div class="backpack-item-cooldown__content">
            <div class="backpack-item-cooldown__icon">
                <TimerIcon></TimerIcon>
            </div>
            <div class="backpack-item-cooldown__time">
                {{ timeDifference }}s
            </div>
        </div>

        <div class="backpack-item-cooldown__background"></div>
    </div>
</template>

<style scoped lang="scss">
.backpack-item-cooldown {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
  text-align: center;

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1
  }

  &__icon {
    margin-bottom: 5px;
  }

  &__background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1A1A1A;
    opacity: .5;
    z-index: 0;
  }
}
</style>
