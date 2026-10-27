/**
 * True isometric projection (30°). World units are "tiles":
 *   x runs to the lower right, y to the lower left, z straight up.
 * The viewer looks from +x/+y, so only the top, the +y face (left) and the +x face (right)
 * of a box are ever visible. Ad faces, windows and screens therefore always sit on those faces.
 */
export const TILE = 22
const COS = Math.cos(Math.PI / 6)
const SIN = 0.5

export type P3 = readonly [x: number, y: number, z: number]
export type P2 = readonly [number, number]

export function iso(x: number, y: number, z = 0): P2 {
  return [(x - y) * COS * TILE, (x + y) * SIN * TILE - z * TILE]
}

export const pts = (list: readonly P2[]) =>
  list.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ')

export const poly = (list: readonly P3[]) => pts(list.map((p) => iso(...p)))

/** Ground footprint (z fixed). */
export const rectXY = (x: number, y: number, w: number, d: number, z = 0) =>
  poly([
    [x, y, z],
    [x + w, y, z],
    [x + w, y + d, z],
    [x, y + d, z],
  ])

/** A rectangle on a plane of constant y (a "left" face). u runs along x, v along z. */
export const rectOnY = (y: number, x0: number, x1: number, z0: number, z1: number) =>
  poly([
    [x0, y, z0],
    [x1, y, z0],
    [x1, y, z1],
    [x0, y, z1],
  ])

/** A rectangle on a plane of constant x (a "right" face). u runs along y, v along z. */
export const rectOnX = (x: number, y0: number, y1: number, z0: number, z1: number) =>
  poly([
    [x, y0, z0],
    [x, y1, z0],
    [x, y1, z1],
    [x, y0, z1],
  ])

/** Radii of a ground circle of radius r once projected (an axis aligned ellipse). */
export const groundRadii = (r: number) => ({
  rx: r * Math.SQRT2 * COS * TILE,
  ry: r * Math.SQRT2 * SIN * TILE,
})

/** Painter's order key for objects with non overlapping footprints. */
export const depthOf = (x: number, y: number, w = 0, d = 0) => x + w / 2 + (y + d / 2)

/** Screen vector for one tile along each axis, used to slide objects (cars) in screen space. */
export const AXIS = {
  x: iso(1, 0),
  y: iso(0, 1),
} as const
