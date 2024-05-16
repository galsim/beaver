import { useQuery, UseQueryReturnType } from '@tanstack/vue-query'
import { InventoryState } from '@/types/inventory-state'

const MAX_LIMIT = 3
const MIN_LIMIT = 1

function parseCaseFromString(string: string | null): number | undefined {
    if (string === null) {
        return undefined
    }

    const caseNumber = Number.parseInt(string)

    if (isNaN(caseNumber)) {
        return undefined
    }

    return caseNumber
}

function getCase() {
    const url = new URL(window.location.href)

    const caseParam = url.searchParams.get('case')

    return Math.max(
        Math.min(parseCaseFromString(caseParam) ?? MIN_LIMIT, MAX_LIMIT),
        MIN_LIMIT,
    )
}

async function fetchInventoryState(): Promise<InventoryState> {
    const caseNumber = getCase()
    return fetch(`https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net/vueDevTestTask-getInventoryState?case=${caseNumber}`)
        .then((response) => response.json())
}

export function useInventoryState(): UseQueryReturnType<InventoryState, Error> {
    return useQuery<InventoryState>({
        queryKey: ['InventoryState'],
        queryFn: fetchInventoryState,
    })
}
