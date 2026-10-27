/**
 * Isometric materials. Values mirror tokens.css (brand navy, mint, slate) so scenes sit on the
 * site's palette. Light comes from the upper left: top is lightest, the left (+y) face is mid,
 * the right (+x) face is darkest.
 */
export type Tone = { top: string; left: string; right: string }

export const tone = {
  slab: { top: '#f4f7fb', left: '#d9e8ff', right: '#b7d3ff' },
  slabEdge: { top: '#ffffff', left: '#86b5f5', right: '#4a8ad8' },
  slabDark: { top: '#0a3a72', left: '#003069', right: '#00244c' },
  slabDarkEdge: { top: '#0a3a72', left: '#00f4cb', right: '#00a98d' },
  towerDark: { top: '#2f6fc0', left: '#1a56a0', right: '#0e4486' },
  concrete: { top: '#ffffff', left: '#e8eef7', right: '#cfdbec' },
  stone: { top: '#eef4fa', left: '#d6e2f1', right: '#bccde4' },
  brand: { top: '#1a66bc', left: '#004fa4', right: '#003a78' },
  navy: { top: '#003f85', left: '#00244c', right: '#001a38' },
  mint: { top: '#7fffe5', left: '#00f4cb', right: '#00d3af' },
  mintDeep: { top: '#3df9d6', left: '#00d3af', right: '#00a98d' },
  frame: { top: '#2b3b55', left: '#0b1b33', right: '#0b1b33' },
  pole: { top: '#94a1b6', left: '#6b7a93', right: '#4a5a75' },
} satisfies Record<string, Tone>

export const ink = {
  road: '#dde5f0',
  roadEdge: '#c9d5e6',
  lane: '#ffffff',
  grass: '#e2f8f2',
  plaza: '#ffffff',
  glass: '#b7d3ff',
  glassDark: '#86b5f5',
  glassLit: '#7fffe5',
  shadow: '#00244c',
  mint: '#00f4cb',
  mintDeep: '#00a98d',
  brand: '#004fa4',
  navy: '#00244c',
  muted: '#c3ccda',
  white: '#ffffff',
} as const
