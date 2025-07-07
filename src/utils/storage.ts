export const setItem = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error(e)
    }
}

export const getItem = <T>(key: string, defaultValue: T): T => {
    try {
        const storedValue = localStorage.getItem(key)

        if (storedValue) {
            return JSON.parse(storedValue)
        }
        return defaultValue
    } catch (e) {
        console.error(e)
        return defaultValue
    }
}
