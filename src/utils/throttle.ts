// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle(callback: (...args: any[]) => void, delay: number) {
    let previousCall = new Date().getTime()
    return (...args: unknown[]) => {
        const time = new Date().getTime()

        if ((time - previousCall) >= delay) {
            previousCall = time
            callback(...args)
        }
    }
}
