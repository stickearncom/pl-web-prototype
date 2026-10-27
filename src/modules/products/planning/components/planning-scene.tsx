import {
  Billboard,
  billboardAnchor,
  Building,
  FlowLine,
  HeatSpot,
  ink,
  iso,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  Pin,
  tone,
  Tree,
  useLoop,
} from '@/shared/isometric'

/**
 * Planning: audience traffic over a small district, and a shortlist that narrows
 * from every candidate to the best two. Loops while on screen.
 */
const W = 8
const R = { from: 3.2, to: 4.6 }

const boards = {
  p1: { x: 0.4, y: 3.05, axis: 'x', len: 1.5, pole: 1.1, panel: 0.85 },
  p2: { x: 5.0, y: 3.05, axis: 'x', len: 1.5, pole: 1.1, panel: 0.85 },
  p3: { x: 3.05, y: 0.4, axis: 'y', len: 1.5, pole: 1.1, panel: 0.85 },
  p4: { x: 3.05, y: 5.0, axis: 'y', len: 1.5, pole: 1.1, panel: 0.85 },
  p5: { x: 5.7, y: 2.2, axis: 'x', len: 1.4, pole: 2.0, panel: 1.0, wall: true, digital: true },
} as const

type Id = keyof typeof boards
const rounds: readonly (readonly Id[])[] = [
  ['p1', 'p2', 'p3', 'p4', 'p5'],
  ['p2', 'p4', 'p5'],
  ['p2', 'p4'],
]

export function PlanningScene() {
  const { ref, index } = useLoop(rounds.length, 2600)
  const picked = rounds[index]!
  const final = index === rounds.length - 1
  const on = (id: Id) => picked.includes(id)

  return (
    <div ref={ref}>
      <IsoStage
        w={W}
        d={W}
        top={4.2}
        peak={[5.7, 0.4]}
        label="Illustration of a district with audience traffic. Billboard candidates narrow down to a final shortlist."
      >
        <IsoSlab w={W} d={W} />
        <IsoTile x={0} y={R.from} w={W} d={R.to - R.from} fill={ink.road} />
        <IsoTile x={R.from} y={0} w={R.to - R.from} d={W} fill={ink.road} />
        <LaneDashes axis="x" lane={3.9} from={0} to={R.from} />
        <LaneDashes axis="x" lane={3.9} from={R.to} to={W} />
        <LaneDashes axis="y" lane={3.9} from={0} to={R.from} />
        <LaneDashes axis="y" lane={3.9} from={R.to} to={W} />
        <IsoTile x={5.0} y={5.0} w={2.6} d={2.6} fill={ink.grass} />

        <HeatSpot at={iso(3.9, 3.9)} r={2.4} />
        <HeatSpot at={iso(6.2, 3.9)} r={1.3} strength={0.8} />
        <HeatSpot at={iso(3.9, 6.3)} r={1.3} strength={0.8} />
        <HeatSpot at={iso(1.2, 3.9)} r={1} strength={0.45} />
        <FlowLine path={[iso(0.2, 3.55), iso(7.8, 3.55)]} />
        <FlowLine path={[iso(7.8, 4.25), iso(0.2, 4.25)]} speed={0.8} />
        <FlowLine path={[iso(3.55, 7.8), iso(3.55, 0.2)]} speed={0.9} />
        <FlowLine path={[iso(4.25, 0.2), iso(4.25, 7.8)]} />

        {/* back */}
        <Building
          x={0.4}
          y={0.4}
          w={1.8}
          d={1.8}
          h={2.6}
          tone={tone.brand}
          windows="grid"
          glass="#4a8ad8"
          roof="unit"
        />
        <Tree x={2.5} y={2.4} s={0.8} />
        <Billboard {...boards.p3} face="idle" selected={final && on('p3')} />
        <Billboard {...boards.p1} face="idle" selected={final && on('p1')} />
        {/* right */}
        <Building x={5.4} y={0.4} w={2.0} d={1.8} h={4} windows="grid" />
        <Billboard {...boards.p5} face="idle" selected={final && on('p5')} />
        <Billboard {...boards.p2} face="idle" selected={final && on('p2')} />
        {/* left */}
        <Building x={0.4} y={5.2} w={1.6} d={2.2} h={1.8} tone={tone.stone} />
        <Tree x={2.5} y={7.2} s={0.8} />
        <Billboard {...boards.p4} face="idle" selected={final && on('p4')} />
        {/* front */}
        <Tree x={5.4} y={5.4} s={0.8} />
        <Tree x={7.1} y={5.5} s={0.7} />
        <Building x={5.9} y={6.0} w={1.6} d={1.6} h={0.9} floors={1} roof="unit" />

        {(Object.keys(boards) as Id[]).map((id, i) => (
          <Pin key={id} at={billboardAnchor(boards[id])} show={on(id)} delay={i * 0.06} />
        ))}
      </IsoStage>
    </div>
  )
}
