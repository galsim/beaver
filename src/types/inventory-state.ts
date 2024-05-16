import type { InventoryType } from '@/consts/inventory-type.ts'

export interface InventoryItem {
    id: string,
    type: InventoryType,
    name: string,
    imageUrl: string,
    cooldown?: number,
    count?: number,
    charges?: number,
    maxCharges?: number
}

export interface InventoryState {
    inventory: InventoryItem[],
}
