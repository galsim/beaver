export const BackpackFilterValues = {
    ARMOR: 'armor',
    WEAPON: 'weapon',
    MISCELLANEOUS: 'misc',
} as const

export type BackpackFilter = typeof BackpackFilterValues[keyof typeof BackpackFilterValues]
