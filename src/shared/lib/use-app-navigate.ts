import { useNavigate } from 'react-router-dom'

/** Next.js migration: swap for `useRouter().push`. */
export function useAppNavigate() {
  return useNavigate()
}
