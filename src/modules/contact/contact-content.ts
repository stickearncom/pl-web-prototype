import { Handshake, Megaphone, Presentation } from 'lucide-react'

export const contactContent = {
  meta: {
    title: 'Get in touch',
    description:
      'Talk to the Playlog team about a demo, your next billboard campaign, or partnering with your media inventory.',
  },
  hero: {
    title: 'Let’s Find the Right Way to Move Your OOH Forward',
    description:
      'Whether you’re exploring Playlog, planning your next billboard campaign, or looking to grow your media business, our team is ready to help you find the right solution.',
  },
  choices: {
    title: 'Choose what you need',
    items: [
      {
        value: 'demo',
        icon: Presentation,
        eyebrow: 'Explore Playlog',
        tagline: 'Interactive product walk-through',
        title: 'See Playlog in action',
        description:
          'Discover how Playlog can help you plan, manage, and measure billboard campaigns with data and technology.',
        cta: 'Request a Demo',
      },
      {
        value: 'advertising',
        icon: Megaphone,
        eyebrow: 'Advertise with Playlog',
        tagline: 'Scale high-impact campaigns',
        title: 'Plan your next billboard campaign',
        description:
          'Tell us your campaign objectives, and we’ll help you explore billboard and digital billboard opportunities that fit your needs.',
        cta: 'Talk to Our Team',
      },
      {
        value: 'partnership',
        icon: Handshake,
        eyebrow: 'Partner with Playlog',
        tagline: 'Monetize OOH inventories',
        title: 'Turn your media assets into more opportunities',
        description:
          'Connect your billboard and digital billboard inventory with brands and agencies looking for advertising opportunities.',
        cta: 'Become a Media Partner',
      },
    ],
  },
  form: {
    title: 'Tell Us What You’re Looking For',
    description:
      'Share a few details with us. Our team will get back to you with the right next step.',
  },
}
