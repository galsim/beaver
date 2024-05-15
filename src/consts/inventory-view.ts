export const InventoryViewValues = {
    BACKPACK: 'BACKPACK',
    NEXUS: 'NEXUS',
} as const

export type InventoryView = typeof InventoryViewValues[keyof typeof InventoryViewValues]
