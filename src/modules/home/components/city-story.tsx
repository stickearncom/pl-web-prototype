import { AnimatePresence, m, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { Reveal } from '@/shared/ui'
import { homeContent } from '../home-content'
import { CityDiorama, type CityStage } from './city-diorama'

const ease = [0.16, 1, 0.3, 1] as const
const DESKTOP = '(min-width: 1024px)'

function useMedia(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', cb)
      return () => mq.removeEventListener('change', cb)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/**
 * "How Playlog works": one isometric city that changes as the campaign moves through
 * Plan, Execute and Measure.
 * - Desktop: the city is sticky; scrolling through the three steps drives the stage.
 * - Mobile: a compact tab switcher that auto advances while the scene is on screen.
 * Only one layout is mounted at a time so the scene's loops never run twice.
 */
export function CityStory() {
  const { story } = homeContent
  const desktop = useMedia(DESKTOP)
  return (
    <Section id="how-it-works" className="overflow-x-clip">
      {desktop ? <DesktopStory /> : <MobileStory />}
      <span className="sr-only">{story.sceneLabel}</span>
    </Section>
  )
}

function Header() {
  const { story } = homeContent
  return (
    <>
      <p className="flex items-center gap-3 text-eyebrow text-brand-700">
        <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
        {story.eyebrow}
      </p>
      <h2 className="mt-6 text-h1 text-ink">{story.title}</h2>
      <p className="mt-6 max-w-xl text-lead text-slate-600">{story.description}</p>
    </>
  )
}

function Legend({ stage }: { stage: CityStage }) {
  const step = homeContent.story.steps.find((s) => s.key === stage)!
  return (
    <div className="pointer-events-none absolute top-5 left-5 sm:top-7 sm:left-7">
      <AnimatePresence mode="wait" initial={false}>
        <m.p
          key={stage}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease }}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/90 py-1.5 pr-4 pl-2 text-sm font-medium text-slate-700 shadow-card ring-1 ring-brand-900/6 backdrop-blur"
        >
          <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold text-white">
            {step.tag}
          </span>
          {step.legend}
        </m.p>
      </AnimatePresence>
    </div>
  )
}

function Stage({ stage, className }: { stage: CityStage; className?: string }) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-2xl bg-gradient-to-b from-brand-50 via-white to-mint-50/60 ring-1 ring-brand-900/6',
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(30deg,transparent_49.5%,rgb(0_79_164/0.05)_50%,transparent_50.5%),linear-gradient(150deg,transparent_49.5%,rgb(0_79_164/0.05)_50%,transparent_50.5%)] [background-size:38px_22px] opacity-60"
      />
      <div className="px-4 pt-16 pb-4 sm:px-10 sm:pt-20 sm:pb-8">
        <CityDiorama stage={stage} label={homeContent.story.sceneLabel} />
      </div>
      <Legend stage={stage} />
    </div>
  )
}

/* ---------------------------------------------------------------- desktop */

function DesktopStory() {
  const { story } = homeContent
  const [stage, setStage] = useState<CityStage>('plan')
  return (
    <div className="grid grid-cols-[0.9fr_1.1fr] gap-16 xl:gap-24">
      <div>
        <Reveal>
          <Header />
        </Reveal>
        <ol className="mt-6">
          {story.steps.map((step, i) => (
            <DesktopStep
              key={step.key}
              index={i}
              step={step}
              active={stage === step.key}
              onEnter={() => setStage(step.key as CityStage)}
            />
          ))}
        </ol>
      </div>
      <div className="relative">
        <div className="sticky top-28 pb-8">
          <Stage stage={stage} />
          <Progress stage={stage} onPick={setStage} />
        </div>
      </div>
    </div>
  )
}

function DesktopStep({
  step,
  index,
  active,
  onEnter,
}: {
  step: (typeof homeContent.story.steps)[number]
  index: number
  active: boolean
  onEnter: () => void
}) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })
  useEffect(() => {
    if (inView) onEnter()
  }, [inView, onEnter])

  return (
    <li ref={ref} className="flex min-h-[58vh] items-center last:min-h-[50vh]">
      <div
        className={cn(
          'relative border-l-2 py-2 pl-8 transition-[border-color,opacity] duration-500',
          active ? 'border-mint-500 opacity-100' : 'border-slate-200 opacity-40',
        )}
      >
        <p className="flex items-center gap-3 text-eyebrow text-brand-700">
          <span className="tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          {step.tag}
        </p>
        <h3 className="mt-4 text-h2 text-ink">{step.title}</h3>
        <p className="mt-4 max-w-md text-lead text-slate-600">{step.description}</p>
      </div>
    </li>
  )
}

function Progress({ stage, onPick }: { stage: CityStage; onPick?: (s: CityStage) => void }) {
  const { steps } = homeContent.story
  return (
    <div className="mt-5 flex gap-2" role="presentation">
      {steps.map((s) => (
        <button
          key={s.key}
          type="button"
          tabIndex={-1}
          aria-hidden
          onClick={() => onPick?.(s.key as CityStage)}
          className="group flex-1 py-2"
        >
          <span
            className={cn(
              'block h-1 rounded-full transition-colors duration-500',
              stage === s.key ? 'bg-brand-600' : 'bg-slate-200 group-hover:bg-slate-300',
            )}
          />
        </button>
      ))}
    </div>
  )
}

/* ----------------------------------------------------------------- mobile */

function MobileStory() {
  const { story } = homeContent
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.5 })
  const step = story.steps[index]!

  useEffect(() => {
    if (!inView || paused || reduce) return
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % story.steps.length), 5200)
    return () => window.clearTimeout(t)
  }, [index, inView, paused, reduce, story.steps.length])

  return (
    <div>
      <Reveal>
        <Header />
      </Reveal>
      <div ref={ref} className="mt-10">
        <Stage stage={step.key as CityStage} />
        <div
          role="tablist"
          aria-label={story.eyebrow}
          className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1.5"
        >
          {story.steps.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              id={`story-tab-${s.key}`}
              aria-selected={i === index}
              aria-controls="story-panel"
              onClick={() => {
                setIndex(i)
                setPaused(true)
              }}
              className={cn(
                'rounded-lg py-2.5 text-sm font-semibold transition-colors',
                i === index ? 'bg-white text-brand-700 shadow-card' : 'text-slate-500',
              )}
            >
              {s.tag}
            </button>
          ))}
        </div>
        <div
          id="story-panel"
          role="tabpanel"
          aria-labelledby={`story-tab-${step.key}`}
          className="mt-6 min-h-40"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={step.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
            >
              <h3 className="text-h3 text-ink">{step.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">{step.description}</p>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
