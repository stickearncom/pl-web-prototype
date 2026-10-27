import type { ContentItem } from '../contracts'
import { sampleBody } from './sample'

/** Press and Media. Entries below are templates only. Replace with real releases and coverage. */
export const mediaItems: ContentItem[] = [
  {
    slug: 'press-release-template',
    category: 'Press release',
    title: 'Press release headline goes here',
    description:
      'A short summary of the announcement. Replace this entry with a real press release.',
    date: '2026-10-01',
    readTime: '3 min read',
    coverVariant: 0,
    isSample: true,
    body: sampleBody(
      'This is a template for a press release. Replace the text with the announcement.',
      'Key points',
      ['What is being announced', 'Why it matters for brands and agencies', 'Where to learn more'],
      'Media inquiries can be sent to the Playlog team.',
    ),
  },
  {
    slug: 'media-coverage-template',
    category: 'Media coverage',
    title: 'Media coverage headline goes here',
    description: 'A short excerpt of an article that mentions Playlog. Replace with real coverage.',
    date: '2026-09-20',
    readTime: '2 min read',
    coverVariant: 3,
    isSample: true,
    body: sampleBody(
      'This is a template for a media coverage entry. Add the outlet name, headline, and a link to the original article.',
      'Details',
      ['Outlet and date', 'Headline and excerpt', 'Link to the original'],
      'Only publish coverage that has been confirmed.',
    ),
  },
  {
    slug: 'announcement-template',
    category: 'Announcement',
    title: 'Company announcement headline goes here',
    description: 'A short company announcement. Replace this entry with a real update.',
    date: '2026-09-01',
    readTime: '2 min read',
    coverVariant: 5,
    isSample: true,
    body: sampleBody(
      'This is a template for a company announcement.',
      'Key points',
      ['What changed', 'Who it affects', 'What happens next'],
      'Keep announcements short and factual.',
    ),
  },
]
