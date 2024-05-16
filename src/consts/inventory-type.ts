export const InventoryTypeValues = {
    ARMOR: 'armor',
    WEAPON: 'weapon',
    MISCELLANEOUS: 'misc',
} as const

export type InventoryType = typeof InventoryTypeValues[keyof typeof InventoryTypeValues]
