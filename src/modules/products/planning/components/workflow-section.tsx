import type { ReactNode } from 'react'
import { BriefMockup, IntelligenceMockup, PlanningMockup, ReadinessMockup } from '@/shared/mockups'
import { Section } from '@/shared/layout'
import { SectionHeader, StageBlock } from '@/shared/marketing'
import { planningContent } from '../planning-content'

const visuals: Record<string, ReactNode> = {
  market: <IntelligenceMockup />,
  locations: <PlanningMockup />,
  brief: <BriefMockup />,
  readiness: <ReadinessMockup />,
}

export function WorkflowSection() {
  const { workflow } = planningContent
  return (
    <Section tone="muted" id="workflow">
      <SectionHeader title={workflow.title} description={workflow.description} />
      <div className="mt-20 md:mt-24">
        {workflow.steps.map((step, i) => (
          <StageBlock
            key={step.title}
            index={i}
            tag={`Step ${i + 1}`}
            title={step.title}
            description={step.description}
            features={step.features}
            cta={step.cta}
            visual={visuals[step.visual]}
          />
        ))}
      </div>
    </Section>
  )
}
