import type { InventoryType } from '@/consts/inventory-type.ts'

export interface InventoryItem {
    id: string,
    type: InventoryType,
    name: string,
    imageUrl: string,
    count: number,
    charges: number,
    maxCharges: number
}

export type InventoryState = InventoryItem[]
