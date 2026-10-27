import { circle, rect, rrect } from './geometry'
import { Extrude, LogoMark } from './iso'
import { c } from './palette'
import {
  Billboard,
  Building,
  Card,
  Chip,
  Donut,
  Label,
  Lines,
  MapCard,
  MiniBars,
  MiniLine,
  Pin,
  Road,
} from './parts'
import { SceneFrame } from './scene-frame'

type SceneProps = { className?: string }

/* ============ Home hero ============ */

export function HeroCityScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 520"
      className={className}
      label="Illustration of a billboard on a city street with reach, impressions, and audience data cards"
    >
      <circle cx={330} cy={275} r={215} fill={c.mintSoft} opacity={0.45} />
      <circle cx={405} cy={235} r={150} fill={c.sky200} opacity={0.55} />
      <Road x={30} y={440} w={590} />
      <Building x={46} y={250} w={78} h={190} cols={2} rows={6} seed={1} />
      <Building x={142} y={332} w={72} h={108} cols={2} rows={3} seed={3} />
      <Building x={486} y={238} w={84} h={202} cols={3} rows={6} seed={2} />
      <Building x={580} y={334} w={44} h={106} cols={1} rows={3} seed={4} depth={10} />
      <Billboard x={196} y={178} w={274} h={150} postH={112} tone="blue" />

      <Card x={402} y={64} w={204} h={110}>
        <Label x={418} y={92} size={12} fill={c.slate}>
          Estimated reach
        </Label>
        <MiniBars x={418} y={104} w={170} h={52} values={[3, 5, 4, 7, 6, 9, 8]} highlight={6} />
      </Card>
      <Card x={34} y={86} w={180} h={102}>
        <Label x={50} y={114} size={12} fill={c.slate}>
          Impressions
        </Label>
        <MiniLine x={50} y={126} w={146} h={42} values={[2, 3, 2.6, 4, 3.8, 5.5, 5.2]} />
      </Card>
      <Card x={440} y={286} w={176} h={92}>
        <Label x={456} y={312} size={12} fill={c.slate}>
          Audience
        </Label>
        <Donut
          cx={476}
          cy={346}
          r={18}
          thickness={9}
          segments={[
            { value: 46, color: c.blue },
            { value: 30, color: c.mint },
            { value: 24, color: c.sky300 },
          ]}
        />
        <Lines x={514} y={330} widths={[78, 54, 66]} h={5} gap={8} />
      </Card>
      <Pin x={128} y={434} r={15} />
      <Pin x={332} y={438} r={13} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
      <Pin x={560} y={434} r={15} />
    </SceneFrame>
  )
}

/* ============ Planning ============ */

export function PlanningScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a city map with location pins, traffic density, and audience insight cards"
    >
      <g data-anim="fade">
        <Chip x={50} y={20} w={86} label="Audience" fill={c.blue} color={c.white} />
        <Chip x={146} y={20} w={74} label="Traffic" />
        <Chip x={230} y={20} w={56} label="POI" />
      </g>
      <MapCard x={50} y={64} w={430} h={326} depth={16} />
      <Pin x={150} y={220} r={14} />
      <Pin x={292} y={300} r={16} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
      <Pin x={396} y={178} r={14} />
      <Card x={418} y={50} w={192} h={112}>
        <Label x={434} y={78} size={12} fill={c.slate}>
          Traffic density
        </Label>
        <MiniBars x={434} y={92} w={158} h={50} values={[4, 6, 9, 7, 5, 8]} highlight={2} />
      </Card>
      <Card x={420} y={252} w={196} h={130}>
        <Label x={436} y={280} size={12} fill={c.slate}>
          Audience mix
        </Label>
        <Donut
          cx={476}
          cy={332}
          r={24}
          thickness={11}
          segments={[
            { value: 40, color: c.blue },
            { value: 35, color: c.mint },
            { value: 25, color: c.sky300 },
          ]}
        />
        <Lines x={518} y={312} widths={[76, 56, 66]} h={5} gap={9} />
      </Card>
      <Card x={70} y={372} w={190} h={72}>
        <Label x={86} y={398} size={12} fill={c.slate}>
          Reach estimate
        </Label>
        <rect x={86} y={412} width={158} height={10} rx={5} fill={c.sky100} />
        <rect x={86} y={412} width={112} height={10} rx={5} fill={c.blue} />
      </Card>
    </SceneFrame>
  )
}

/* ============ Locations (Planning step 2) ============ */

export function LocationsScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a map with point of interest markers, traffic density, and a reach estimate"
    >
      <g data-anim="fade">
        <Chip x={196} y={20} w={64} label="POI" fill={c.blue} color={c.white} />
        <Chip x={270} y={20} w={86} label="Movement" />
        <Chip x={366} y={20} w={98} label="Compare cities" />
      </g>
      <MapCard x={190} y={64} w={400} h={310} depth={16} variant={1} />
      <Pin x={282} y={200} r={13} />
      <Pin x={420} y={290} r={16} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
      <Pin x={500} y={170} r={13} />
      <Card x={30} y={80} w={200} h={120}>
        <Label x={46} y={108} size={12} fill={c.slate}>
          Traffic density
        </Label>
        <MiniLine x={46} y={122} w={168} h={52} values={[2, 4, 3.4, 6, 5, 7.6, 6.4]} />
      </Card>
      <Card x={30} y={246} w={210} h={130}>
        <Label x={46} y={274} size={12} fill={c.slate}>
          Nearby points of interest
        </Label>
        <Chip x={46} y={290} w={64} h={22} size={10} label="Office" />
        <Chip x={116} y={290} w={68} h={22} size={10} label="School" />
        <Chip x={46} y={320} w={56} h={22} size={10} label="Retail" />
        <Chip x={108} y={320} w={50} h={22} size={10} label="F&B" />
      </Card>
      <Card x={380} y={380} w={200} h={72}>
        <Label x={396} y={406} size={12} fill={c.slate}>
          Reach estimate
        </Label>
        <rect x={396} y={420} width={168} height={10} rx={5} fill={c.sky100} />
        <rect x={396} y={420} width={124} height={10} rx={5} fill={c.mintDeep} />
      </Card>
    </SceneFrame>
  )
}

/* ============ Market activity (Competitive landscape) ============ */

export function MarketActivityScene({ className }: SceneProps) {
  const cities = [
    ['Jakarta', 250, c.blue],
    ['Bandung', 170, c.blue],
    ['Surabaya', 140, c.blue],
    ['Medan', 90, c.sky400],
    ['Makassar', 60, c.sky400],
  ] as const
  const gantt = [
    [0, 150, c.blue],
    [60, 190, c.slate],
    [20, 120, c.mint],
    [150, 120, c.sky300],
  ] as const
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a market dashboard showing campaigns by city, media formats, and a campaign timeline"
    >
      <Card x={40} y={50} w={540} h={380} depth={16} radius={16} anim="rise">
        <circle cx={64} cy={76} r={5} fill={c.blue} />
        <circle cx={82} cy={76} r={5} fill={c.mint} />
        <circle cx={100} cy={76} r={5} fill={c.sky300} />
        <Label x={64} y={116} size={12} fill={c.slate}>
          Active campaigns by city
        </Label>
        {cities.map(([name, w, fill], i) => (
          <g key={name}>
            <Label x={64} y={146 + i * 32} size={11} weight={500} fill={c.slate}>
              {name}
            </Label>
            <rect
              x={132}
              y={134 + i * 32}
              width={w}
              height={14}
              rx={7}
              fill={fill}
              data-anim="rise"
            />
          </g>
        ))}
        <Label x={64} y={318} size={12} fill={c.slate}>
          Campaign timeline
        </Label>
        {gantt.map(([x0, w, fill], i) => (
          <rect
            key={i}
            x={64 + x0}
            y={332 + i * 22}
            width={w}
            height={11}
            rx={5.5}
            fill={fill}
            data-anim="rise"
          />
        ))}
      </Card>
      <Card x={430} y={120} w={180} h={170}>
        <Label x={446} y={148} size={12} fill={c.slate}>
          Media formats
        </Label>
        <Donut
          cx={500}
          cy={218}
          r={30}
          thickness={14}
          segments={[
            { value: 55, color: c.blue },
            { value: 30, color: c.mint },
            { value: 15, color: c.sky300 },
          ]}
        />
        <Lines x={446} y={262} widths={[90, 60]} h={5} gap={8} />
      </Card>
      <Card x={470} y={316} w={140} h={90}>
        <Label x={486} y={344} size={12} fill={c.slate}>
          Coverage
        </Label>
        <MiniBars x={486} y={354} w={106} h={36} values={[4, 6, 5, 8, 7]} highlight={3} gap={6} />
      </Card>
    </SceneFrame>
  )
}

/* ============ Measurement ============ */

export function MeasurementScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a campaign dashboard with performance charts, an audience chart, and a report"
    >
      <Card x={40} y={64} w={520} h={352} depth={16} radius={16} anim="rise">
        <circle cx={64} cy={88} r={5} fill={c.blue} />
        <circle cx={82} cy={88} r={5} fill={c.mint} />
        <circle cx={100} cy={88} r={5} fill={c.sky300} />
        <Lines x={130} y={85} widths={[110]} h={6} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={60 + i * 158} y={112} width={146} height={66} rx={10} fill={c.sky50} />
            <Label x={74 + i * 158} y={136} size={11} fill={c.slate}>
              {['Reach', 'Impressions', 'Progress'][i]}
            </Label>
            <rect
              x={74 + i * 158}
              y={150}
              width={[70, 90, 56][i]}
              height={12}
              rx={6}
              fill={i === 2 ? c.mintDeep : c.blue}
            />
          </g>
        ))}
        <MiniBars
          x={70}
          y={206}
          w={310}
          h={150}
          values={[5, 7, 6, 9, 8, 11, 10, 13]}
          color={c.sky300}
          highlight={7}
        />
        <MiniLine
          x={70}
          y={206}
          w={310}
          h={120}
          values={[3, 4.5, 4, 6, 6.4, 8, 8.2, 10]}
          color={c.blue}
          area={false}
        />
        <Lines x={64} y={382} widths={[70, 46]} h={5} gap={7} />
      </Card>
      <Card x={426} y={236} w={196} h={150}>
        <Label x={442} y={264} size={12} fill={c.slate}>
          Audience
        </Label>
        <Donut
          cx={486}
          cy={326}
          r={26}
          thickness={12}
          segments={[
            { value: 45, color: c.blue },
            { value: 30, color: c.mint },
            { value: 25, color: c.sky300 },
          ]}
        />
        <Lines x={530} y={306} widths={[64, 46, 54]} h={5} gap={9} />
      </Card>
      <Card x={470} y={30} w={140} h={110}>
        <Lines x={488} y={52} widths={[70, 96, 80]} h={5} gap={9} />
        <circle cx={582} cy={116} r={13} fill={c.mint} />
        <path
          d="M575.5 116.5 l5 5 l8.5 -9"
          stroke={c.blueDeep}
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Label x={488} y={120} size={11} fill={c.blue}>
          Report
        </Label>
      </Card>
    </SceneFrame>
  )
}

/* ============ Competitive landscape ============ */

export function CompetitiveScene({ className }: SceneProps) {
  const rival = { front: c.slate, side: c.slateSoft, dot: c.white }
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a city map showing competitor billboard locations, a share of voice chart, and a campaign timeline"
    >
      <MapCard x={40} y={54} w={392} h={312} depth={16} variant={1} />
      <Pin x={118} y={196} r={12} {...rival} pulse={false} />
      <Pin x={196} y={290} r={12} {...rival} pulse={false} />
      <Pin x={328} y={160} r={12} {...rival} pulse={false} />
      <Pin x={366} y={282} r={12} {...rival} pulse={false} />
      <Pin x={248} y={226} r={16} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
      <Card x={414} y={96} w={200} h={176}>
        <Label x={430} y={124} size={12} fill={c.slate}>
          Share of voice
        </Label>
        <Donut
          cx={472}
          cy={198}
          r={32}
          thickness={14}
          segments={[
            { value: 38, color: c.mint },
            { value: 30, color: c.blue },
            { value: 20, color: c.slate },
            { value: 12, color: c.sky300 },
          ]}
        />
        <Lines x={520} y={170} widths={[70, 54, 62, 44]} h={5} gap={10} />
      </Card>
      <Card x={64} y={340} w={380} h={108}>
        <Label x={80} y={368} size={12} fill={c.slate}>
          Campaign timeline
        </Label>
        <rect x={80} y={380} width={150} height={9} rx={4.5} fill={c.blue} />
        <rect x={150} y={398} width={190} height={9} rx={4.5} fill={c.slate} opacity={0.7} />
        <rect x={110} y={416} width={120} height={9} rx={4.5} fill={c.mint} />
        <rect x={260} y={416} width={100} height={9} rx={4.5} fill={c.sky300} />
      </Card>
    </SceneFrame>
  )
}

/* ============ Digital billboard ============ */

export function DigitalBillboardScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a digital billboard with a search bar, a past campaign list, and impression data"
    >
      <circle cx={260} cy={250} r={190} fill={c.mintSoft} opacity={0.4} />
      <Road x={40} y={440} w={560} />
      <Extrude
        points={rect(236, 316, 30, 124)}
        depth={10}
        front={c.blueDeep}
        sideLeft={c.blueDark}
        anim="rise"
      />
      <Extrude
        points={rrect(70, 96, 360, 224, 12)}
        depth={18}
        front={c.blueDeep}
        sideLeft={c.mint}
        sideBottom={c.mintDeep}
        anim="pop"
      >
        <rect x={86} y={112} width={328} height={192} rx={8} fill={c.blue} />
        <rect x={102} y={128} width={150} height={160} rx={6} fill={c.mint} />
        <LogoMark x={132} y={158} size={62} front={c.blueDeep} side={c.white} />
        <rect x={268} y={132} width={130} height={14} rx={7} fill={c.white} />
        <rect x={268} y={160} width={96} height={10} rx={5} fill={c.white} opacity={0.6} />
        <rect x={268} y={180} width={110} height={10} rx={5} fill={c.white} opacity={0.4} />
        <rect x={268} y={246} width={70} height={30} rx={15} fill={c.mint} />
        <circle cx={338} cy={296} r={4} fill={c.mint} />
        <circle cx={352} cy={296} r={4} fill={c.white} opacity={0.4} />
        <circle cx={366} cy={296} r={4} fill={c.white} opacity={0.4} />
      </Extrude>
      <Card x={36} y={20} w={300} h={50}>
        <circle cx={64} cy={45} r={8} fill="none" stroke={c.blue} strokeWidth={3} />
        <path d="M70 51 l7 7" stroke={c.blue} strokeWidth={3} strokeLinecap="round" />
        <Lines x={90} y={42} widths={[110]} h={6} />
        <Chip x={252} y={33} w={72} label="Jakarta" fill={c.blue} color={c.white} />
      </Card>
      <Card x={420} y={248} w={196} h={168}>
        <Label x={436} y={276} size={12} fill={c.slate}>
          Past campaigns
        </Label>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={450} cy={306 + i * 38} r={10} fill={[c.blue, c.mint, c.sky300][i]} />
            <Lines x={470} y={299 + i * 38} widths={[84, 54]} h={5} gap={6} />
            {i === 0 && (
              <Chip
                x={560}
                y={298}
                w={46}
                h={18}
                size={9}
                label="Live"
                fill={c.mintSoft}
                color={c.blueDeep}
              />
            )}
          </g>
        ))}
      </Card>
      <Card x={450} y={64} w={170} h={110}>
        <Label x={466} y={92} size={12} fill={c.slate}>
          Impressions
        </Label>
        <MiniLine x={466} y={106} w={138} h={46} values={[2, 3.2, 3, 4.6, 4.2, 6]} />
      </Card>
      <Pin x={196} y={434} r={12} />
    </SceneFrame>
  )
}

/* ============ Billboard ============ */

export function BillboardScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 480"
      className={className}
      label="Illustration of a roadside billboard with floating location, reach, and competitor activity data"
    >
      <circle cx={250} cy={250} r={195} fill={c.sky200} opacity={0.5} />
      <Road x={30} y={420} w={580} />
      <Building x={430} y={296} w={70} h={124} cols={2} rows={3} seed={2} />
      <Building x={520} y={340} w={50} h={80} cols={1} rows={2} seed={5} depth={10} />
      <Billboard x={56} y={96} w={330} h={186} postH={138} tone="blue" depth={18} />
      <Card x={410} y={50} w={206} h={146}>
        <Label x={426} y={78} size={12} fill={c.slate}>
          Location
        </Label>
        <Label x={426} y={102} size={11} fill={c.slate} weight={500}>
          Reach
        </Label>
        <rect x={486} y={95} width={110} height={8} rx={4} fill={c.sky100} />
        <rect x={486} y={95} width={76} height={8} rx={4} fill={c.blue} />
        <Label x={426} y={126} size={11} fill={c.slate} weight={500}>
          Impr.
        </Label>
        <rect x={486} y={119} width={110} height={8} rx={4} fill={c.sky100} />
        <rect x={486} y={119} width={94} height={8} rx={4} fill={c.mintDeep} />
        <Chip x={426} y={146} w={50} h={22} size={10} label="Bank" />
        <Chip x={482} y={146} w={50} h={22} size={10} label="Retail" />
        <Chip x={538} y={146} w={58} h={22} size={10} label="Dining" />
      </Card>
      <Card x={432} y={226} w={184} h={112}>
        <Label x={448} y={254} size={12} fill={c.slate}>
          Competitor activity
        </Label>
        <MiniBars
          x={448}
          y={266}
          w={150}
          h={50}
          values={[6, 4, 8, 5, 9]}
          color={c.sky300}
          highlight={4}
        />
      </Card>
      <Pin x={336} y={412} r={13} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
    </SceneFrame>
  )
}

/* ============ Insights ============ */

export function InsightsScene({ className }: SceneProps) {
  const steps = ['Industry', 'Market trends', 'Competitors', 'Opportunities']
  return (
    <SceneFrame
      viewBox="0 0 640 440"
      className={className}
      label="Illustration of research report covers above a flow from industry to market trends, competitor activity, and opportunities"
    >
      <circle cx={320} cy={190} r={170} fill={c.mintSoft} opacity={0.4} />
      <Card x={76} y={96} w={170} h={230} depth={12} radius={10}>
        <Lines x={94} y={120} widths={[96, 70]} h={7} gap={9} />
        <MiniBars x={94} y={196} w={132} h={90} values={[4, 6, 5, 8, 7]} highlight={3} />
      </Card>
      <Extrude
        points={rrect(236, 56, 172, 242, 10)}
        depth={14}
        front={c.blue}
        sideLeft={c.mint}
        sideBottom={c.mintDeep}
        anim="slide"
      >
        <LogoMark x={260} y={86} size={46} />
        <rect x={258} y={190} width={100} height={8} rx={4} fill={c.white} opacity={0.9} />
        <rect x={258} y={208} width={70} height={8} rx={4} fill={c.white} opacity={0.5} />
        <rect x={258} y={262} width={56} height={16} rx={8} fill={c.mint} />
      </Extrude>
      <Card x={396} y={110} w={170} h={230} depth={12} radius={10}>
        <Lines x={414} y={134} widths={[104, 60]} h={7} gap={9} />
        <Donut
          cx={481}
          cy={246}
          r={32}
          thickness={14}
          segments={[
            { value: 45, color: c.blue },
            { value: 30, color: c.mint },
            { value: 25, color: c.sky300 },
          ]}
        />
      </Card>
      <g data-anim="fade">
        <path d="M120 384 H520" stroke={c.sky300} strokeWidth={2} strokeDasharray="5 6" />
      </g>
      {steps.map((label, i) => (
        <g key={label} data-anim="pop">
          <rect
            x={52 + i * 138}
            y={366}
            width={122}
            height={36}
            rx={18}
            fill={i === 3 ? c.blue : c.white}
            stroke={c.sky300}
          />
          <Label
            x={113 + i * 138}
            y={389}
            size={12}
            anchor="middle"
            fill={i === 3 ? c.white : c.blue}
          >
            {label}
          </Label>
        </g>
      ))}
    </SceneFrame>
  )
}

/* ============ Inventory (Home) ============ */

export function InventoryScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 640 440"
      className={className}
      label="Illustration of a list of available billboards with a filter panel and a location pin"
    >
      <Card x={52} y={44} w={410} h={340} depth={14} radius={16} anim="rise">
        <Lines x={76} y={72} widths={[120]} h={7} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={72} y={104 + i * 92} width={366} height={78} rx={10} fill={c.sky50} />
            <rect
              x={84}
              y={116 + i * 92}
              width={86}
              height={54}
              rx={6}
              fill={[c.blue, c.blueDeep, c.mint][i]}
            />
            <LogoMark
              x={100}
              y={124 + i * 92}
              size={20}
              front={i === 2 ? c.blueDeep : c.white}
              side={i === 2 ? c.white : c.mint}
            />
            <Lines x={186} y={120 + i * 92} widths={[130, 90]} h={7} gap={9} />
            <Lines x={186} y={152 + i * 92} widths={[60]} h={5} fill={c.sky300} />
            <Chip
              x={346}
              y={124 + i * 92}
              w={76}
              h={24}
              size={10}
              label={i === 1 ? 'Booked' : 'Available'}
              fill={i === 1 ? c.sky200 : c.mintSoft}
              color={i === 1 ? c.blue : c.blueDeep}
            />
          </g>
        ))}
      </Card>
      <Card x={436} y={96} w={174} h={190}>
        <Label x={452} y={124} size={12} fill={c.slate}>
          Filters
        </Label>
        {['City', 'Format', 'Audience'].map((t, i) => (
          <g key={t}>
            <rect
              x={452}
              y={140 + i * 44}
              width={20}
              height={20}
              rx={5}
              fill={i === 0 ? c.blue : c.white}
              stroke={i === 0 ? c.blue : c.sky300}
            />
            {i === 0 && (
              <path
                d="M457 151 l4 4 l7 -8"
                stroke={c.white}
                strokeWidth={2.4}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <Label x={482} y={155 + i * 44} size={12} weight={500} fill={c.ink}>
              {t}
            </Label>
          </g>
        ))}
      </Card>
      <Pin x={530} y={354} r={14} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
    </SceneFrame>
  )
}

/* ============ Verification (Home) ============ */

export function VerificationScene({ className }: SceneProps) {
  const steps = ['Installed', 'Verified', 'Live', 'Done']
  return (
    <SceneFrame
      viewBox="0 0 640 440"
      className={className}
      label="Illustration of a billboard proof of posting photo with a verified badge and a campaign progress timeline"
    >
      <Card x={56} y={36} w={380} h={252} depth={14} radius={16} anim="rise">
        <rect x={72} y={52} width={348} height={220} rx={10} fill={c.sky100} />
        <rect x={72} y={216} width={348} height={56} rx={0} fill={c.sky200} />
        <Billboard x={140} y={84} w={190} h={106} postH={44} tone="blue" depth={12} anim="fade" />
        <path
          d="M84 76 v-14 h14 M408 62 h14 v14 M422 258 v14 h-14 M98 272 h-14 v-14"
          stroke={c.blue}
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
      </Card>
      <g data-anim="pop">
        <circle cx={436} cy={44} r={30} fill={c.mint} />
        <path
          d="M422 44.5 l9 9 l17 -19"
          stroke={c.blueDeep}
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <Card x={196} y={296} w={414} h={116}>
        <Label x={214} y={324} size={12} fill={c.slate}>
          Campaign progress
        </Label>
        <path d="M244 366 H566" stroke={c.sky200} strokeWidth={4} strokeLinecap="round" />
        <path d="M244 366 H430" stroke={c.mintDeep} strokeWidth={4} strokeLinecap="round" />
        {steps.map((t, i) => (
          <g key={t}>
            <circle
              cx={244 + i * 107}
              cy={366}
              r={10}
              fill={i < 3 ? c.mint : c.white}
              stroke={i < 3 ? c.mint : c.sky300}
              strokeWidth={2}
            />
            <Label x={244 + i * 107} y={394} size={11} weight={500} anchor="middle" fill={c.slate}>
              {t}
            </Label>
          </g>
        ))}
      </Card>
    </SceneFrame>
  )
}

/* ============ Final CTA motif (dark backgrounds) ============ */

export function CtaScene({ className }: SceneProps) {
  return (
    <SceneFrame
      viewBox="0 0 480 380"
      className={className}
      label="Abstract blocks in the Playlog mark style"
      decorative
    >
      <g fill={c.white} opacity={0.18}>
        {Array.from({ length: 7 }).flatMap((_, r) =>
          Array.from({ length: 9 }).map((__, k) => (
            <circle key={`${r}-${k}`} cx={30 + k * 52} cy={30 + r * 52} r={2} />
          )),
        )}
      </g>
      <LogoMark x={150} y={46} size={170} front={c.white} side={c.mint} anim="pop" />
      <Extrude
        points={rect(332, 70, 54, 54)}
        depth={22}
        front={c.blue}
        sideLeft={c.mint}
        anim="pop"
      />
      <Extrude
        points={rect(60, 232, 64, 64)}
        depth={26}
        front={c.blue}
        sideLeft={c.mint}
        anim="pop"
      />
      <Extrude
        points={circle(396, 268, 26)}
        depth={14}
        front={c.white}
        sideLeft={c.mint}
        uniform
        anim="pop"
      />
      <Extrude
        points={rect(272, 318, 34, 34)}
        depth={12}
        front={c.mint}
        sideLeft={c.mintDeep}
        anim="pop"
      />
    </SceneFrame>
  )
}

/* ============ About: four stages of OOH ============ */

export function JourneyArt({ stage, className }: { stage: 1 | 2 | 3 | 4; className?: string }) {
  const labels = {
    1: 'A single billboard by the road',
    2: 'Many more billboards, screens, and locations',
    3: 'Disconnected data points tangled together',
    4: 'Connected data flowing into one dashboard',
  } as const
  return (
    <SceneFrame viewBox="0 0 260 200" className={className} label={labels[stage]}>
      {stage === 1 && (
        <>
          <circle cx={200} cy={48} r={18} fill={c.mintSoft} />
          <Road x={20} y={168} w={220} h={14} />
          <Billboard x={74} y={52} w={112} h={62} postH={54} tone="blue" depth={10} />
        </>
      )}
      {stage === 2 && (
        <>
          <Road x={14} y={168} w={232} h={14} />
          <Building x={192} y={86} w={42} h={82} cols={1} rows={3} depth={9} />
          <Billboard x={28} y={86} w={64} h={36} postH={46} tone="white" depth={8} />
          <Billboard x={104} y={58} w={76} h={42} postH={68} tone="blue" depth={9} />
          <Billboard x={60} y={132} w={50} h={28} postH={8} tone="mint" depth={7} />
        </>
      )}
      {stage === 3 && (
        <>
          <path
            d="M40 60 L150 140 L220 50 L70 150 L190 100 L40 60 M220 50 L110 40"
            stroke={c.slateSoft}
            strokeWidth={2}
            fill="none"
            strokeDasharray="4 5"
          />
          {[
            [40, 60, c.sky300],
            [150, 140, c.slate],
            [220, 50, c.sky400],
            [70, 150, c.slateSoft],
            [190, 100, c.sky300],
            [110, 40, c.slate],
          ].map(([x, y, fill]) => (
            <Extrude
              key={`${x}-${y}`}
              points={circle(x as number, y as number, 11)}
              depth={5}
              front={fill as string}
              sideLeft={c.sky200}
              uniform
              anim="pop"
            />
          ))}
        </>
      )}
      {stage === 4 && (
        <>
          <path
            d="M44 56 H84 M44 148 H84 M216 56 H176 M216 148 H176"
            stroke={c.mintDeep}
            strokeWidth={2.5}
            fill="none"
            strokeLinecap="round"
          />
          {[
            [34, 56],
            [34, 148],
            [226, 56],
            [226, 148],
          ].map(([x, y]) => (
            <Extrude
              key={`${x}-${y}`}
              points={circle(x as number, y as number, 11)}
              depth={5}
              front={c.blue}
              sideLeft={c.mint}
              uniform
              anim="pop"
            />
          ))}
          <Card x={82} y={40} w={96} h={118} radius={10} depth={8}>
            <MiniBars x={96} y={86} w={68} h={34} values={[3, 5, 4, 7]} highlight={3} gap={5} />
            <Lines x={96} y={56} widths={[50, 30]} h={5} gap={7} />
            <circle cx={158} cy={140} r={8} fill={c.mint} />
          </Card>
        </>
      )}
    </SceneFrame>
  )
}
