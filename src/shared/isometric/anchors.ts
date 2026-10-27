import { iso, type P2 } from './projection'

type BoardShape = {
  x: number
  y: number
  axis: 'x' | 'y'
  len?: number
  pole?: number
  panel?: number
}

/** Projected top-centre of a billboard panel, for pins and badges. */
export function billboardAnchor(b: BoardShape): P2 {
  const len = b.len ?? 2.4
  const top = (b.pole ?? 1.7) + (b.panel ?? 1.25)
  return b.axis === 'x' ? iso(b.x + len / 2, b.y - 0.08, top) : iso(b.x - 0.08, b.y + len / 2, top)
}

/** Projected ground point in front of a billboard, for reach rings. */
export function billboardFoot(b: BoardShape): P2 {
  const len = b.len ?? 2.4
  return b.axis === 'x' ? iso(b.x + len / 2, b.y + 0.6) : iso(b.x + 0.6, b.y + len / 2)
}
