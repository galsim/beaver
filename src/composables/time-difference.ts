import { onBeforeUnmount, type Ref, ref } from 'vue'

function getTimeDifference(cooldown: number) {
    return Math.floor((cooldown - Date.now()) / 1000)
}

export function useTimeDifference(cooldown: Ref<number>) {
    const timeDifference = ref(getTimeDifference(cooldown.value))

    const interval = setInterval(() => {
        timeDifference.value = getTimeDifference(cooldown.value)

        if (timeDifference.value <= 0) {
            window.clearInterval(interval)
        }
    }, 1000)

    onBeforeUnmount(() => {
        window.clearInterval(interval)
    })

    return timeDifference
}
