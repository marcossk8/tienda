export const orderProducts = {
    minor: {
        func: (a: number, b: number): 0 | 1 | -1 => {
            if (a > b) return 1
            if (a < b) return -1
            return 0
        },
    },
    major: {
        func: (a: number, b: number): 0 | 1 | -1 => {
            if (a < b) return 1
            if (a > b) return -1
            return 0
        },
    },
}