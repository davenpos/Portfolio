"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function useSetQueryParams() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const setQueryParams = arr => {
        const params = new URLSearchParams(searchParams)
        arr.forEach(obj => params.set(obj.queryVar, obj.val))
        replace(`${pathname}?${params.toString()}`)
    }

    return setQueryParams
}