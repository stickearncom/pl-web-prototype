import { useSearchParams } from 'react-router-dom'

/** Reactive read of one query param. Next.js migration: use `useSearchParams` from next/navigation. */
export function useSearchParam(name: string): string | null {
  const [params] = useSearchParams()
  return params.get(name)
}
