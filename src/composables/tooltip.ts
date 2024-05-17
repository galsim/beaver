import {
    onBeforeUnmount, onMounted, ref, type Ref, type ToRefs,
} from 'vue'
import { throttle } from '@/utils/throttle.ts'

interface UseTooltipComposable {
    x: number,
    y: number,
    isTooltipVisible: boolean,
}

export function useTooltip(element: Ref<HTMLElement | null>): ToRefs<UseTooltipComposable> {
    const x = ref(0)
    const y = ref(0)
    const isTooltipVisible = ref(false)

    function mouseEnterHandler() {
        isTooltipVisible.value = true
    }

    function mouseLeaveHandler() {
        isTooltipVisible.value = false
    }

    const mouseMoveHandler = throttle((event: MouseEvent) => {
        if (element.value !== null && isTooltipVisible.value) {
            x.value = event.clientX - element.value.getBoundingClientRect().left
            y.value = event.clientY - element.value.getBoundingClientRect().top
        }
    }, 10)

    onMounted(() => {
        if (element.value !== null) {
            element.value.addEventListener('mouseenter', mouseEnterHandler)
            element.value.addEventListener('mouseover', mouseEnterHandler)
            element.value.addEventListener('mouseleave', mouseLeaveHandler)
            element.value.addEventListener('mousemove', mouseMoveHandler)
        }
    })

    onBeforeUnmount(() => {
        if (element.value !== null) {
            element.value.removeEventListener('mouseenter', mouseEnterHandler)
            element.value.removeEventListener('mouseover', mouseEnterHandler)
            element.value.removeEventListener('mouseleave', mouseLeaveHandler)
            element.value.removeEventListener('mousemove', mouseMoveHandler)
        }
    })

    return {
        x,
        y,
        isTooltipVisible,
    }
}
