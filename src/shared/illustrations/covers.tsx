import { circle, rect, rrect } from './geometry'
import { Extrude, LogoMark } from './iso'
import { c } from './palette'
import { Billboard, Building, MapCard, Pin, Road, type BillboardTone } from './parts'

/** Static cover art for cards. Six looks, picked by index so lists feel varied. */
export function CoverArt({ variant = 0, className }: { variant?: number; className?: string }) {
  const v = ((variant % 6) + 6) % 6
  const bgs = [c.blue, c.blueDeep, c.mintSoft, c.sky200, c.blueDark, c.sky100]
  return (
    <svg
      viewBox="0 0 400 250"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      <rect width={400} height={250} fill={bgs[v]} />
      {v === 0 && (
        <>
          <LogoMark x={34} y={30} size={34} />
          {[60, 92, 70, 130, 110, 160].map((h, i) => (
            <Extrude
              key={i}
              points={rect(150 + i * 38, 220 - h, 24, h)}
              depth={9}
              front={i === 5 ? c.mint : c.white}
              sideLeft={i === 5 ? c.white : c.mint}
            />
          ))}
        </>
      )}
      {v === 1 && (
        <>
          <Extrude
            points={circle(150, 125, 70)}
            depth={26}
            front={c.white}
            sideLeft={c.mint}
            uniform
          />
          <circle cx={150} cy={125} r={34} fill={c.blueDeep} />
          <circle cx={150} cy={125} r={14} fill={c.mint} />
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={270}
              y={80 + i * 36}
              width={[96, 70, 84][i]}
              height={12}
              rx={6}
              fill={i === 0 ? c.mint : c.sky400}
              opacity={i === 0 ? 1 : 0.7}
            />
          ))}
        </>
      )}
      {v === 2 && (
        <>
          <Road x={20} y={214} w={360} h={14} />
          <Building x={40} y={90} w={56} h={124} cols={2} rows={4} seed={1} depth={10} />
          <Building
            x={112}
            y={60}
            w={64}
            h={154}
            cols={2}
            rows={5}
            seed={2}
            depth={10}
            tone="blue"
          />
          <Building x={192} y={116} w={52} h={98} cols={2} rows={3} seed={3} depth={10} />
          <Building x={262} y={74} w={60} h={140} cols={2} rows={4} seed={4} depth={10} />
          <Building x={336} y={130} w={36} h={84} cols={1} rows={3} seed={5} depth={8} />
        </>
      )}
      {v === 3 && (
        <>
          <MapCard x={70} y={30} w={260} h={180} depth={12} />
          <Pin x={150} y={120} r={9} pulse={false} />
          <Pin
            x={226}
            y={160}
            r={10}
            front={c.mint}
            side={c.blueDeep}
            dot={c.blueDeep}
            pulse={false}
          />
          <Pin x={274} y={92} r={9} pulse={false} />
        </>
      )}
      {v === 4 && (
        <>
          <Extrude
            points={rrect(70, 100, 200, 110, 10)}
            depth={14}
            front={c.blue}
            sideLeft={c.mint}
          />
          <Extrude
            points={rrect(110, 62, 200, 110, 10)}
            depth={14}
            front={c.white}
            sideLeft={c.sky300}
            sideBottom={c.sky400}
          >
            <rect x={130} y={84} width={90} height={8} rx={4} fill={c.sky300} />
            <rect x={130} y={104} width={130} height={8} rx={4} fill={c.sky200} />
            <rect x={130} y={132} width={52} height={20} rx={10} fill={c.mint} />
          </Extrude>
        </>
      )}
      {v === 5 && (
        <>
          <path
            d="M30 190 L100 150 L160 168 L230 110 L300 126 L370 70"
            stroke={c.blue}
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 190 L100 150 L160 168 L230 110 L300 126 L370 70 V220 H30 Z"
            fill={c.blue}
            opacity={0.08}
          />
          <Billboard x={250} y={30} w={100} h={56} postH={0} depth={10} tone="blue" />
        </>
      )}
    </svg>
  )
}

/** Illustrated stand-in for a campaign photo. Replace with a real image by passing `src` in content. */
export function BillboardThumb({
  tone = 'blue',
  seed = 0,
  className,
}: {
  tone?: BillboardTone
  seed?: number
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={`thumb-sky-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.sky100} />
          <stop offset="1" stopColor={c.sky200} />
        </linearGradient>
      </defs>
      <rect width={400} height={300} fill={`url(#thumb-sky-${seed})`} />
      <circle cx={[320, 90, 340, 70][seed % 4]} cy={70} r={34} fill={c.mintSoft} />
      <Building
        x={14 + (seed % 2) * 8}
        y={120}
        w={60}
        h={140}
        cols={2}
        rows={4}
        seed={seed}
        depth={10}
        anim={undefined}
      />
      <Building
        x={326 - (seed % 3) * 6}
        y={150}
        w={54}
        h={110}
        cols={2}
        rows={3}
        seed={seed + 2}
        depth={10}
        anim={undefined}
      />
      <Road x={10} y={262} w={380} h={16} />
      <Billboard x={90} y={70} w={210} h={116} postH={76} tone={tone} depth={14} anim={undefined} />
    </svg>
  )
}
