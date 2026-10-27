import type { ContentItem } from '../contracts'
import { sampleBody } from './sample'

/** OOH Market Reports. Placeholder copy, replace with real reports. */
export const reportItems: ContentItem[] = [
  {
    slug: 'indonesia-ooh-market-overview',
    category: 'Market',
    title: 'Indonesia OOH Market Overview',
    description:
      'A broad look at how out-of-home advertising is structured and where activity concentrates.',
    date: '2026-10-10',
    readTime: '12 min read',
    coverVariant: 0,
    isSample: true,
    body: sampleBody(
      'This overview introduces the structure of the out-of-home market, the main formats, and the cities where activity concentrates.',
      'In this report',
      [
        'Market structure and formats',
        'City level activity',
        'Category participation',
        'Opportunities to watch',
      ],
      'Replace this sample with the final report summary and a download link.',
    ),
  },
  {
    slug: 'digital-billboard-landscape',
    category: 'Format',
    title: 'The Digital Billboard Landscape',
    description: 'How digital screens are changing the way brands plan and buy billboard media.',
    date: '2026-09-30',
    readTime: '10 min read',
    coverVariant: 1,
    isSample: true,
    body: sampleBody(
      'Digital billboards add flexibility and data to a traditionally static medium. This report looks at where screens are placed and how campaigns use them.',
      'In this report',
      [
        'Where digital screens concentrate',
        'How campaign length and rotation work',
        'What data is available for planning',
      ],
      'Replace this sample with the final report summary and a download link.',
    ),
  },
  {
    slug: 'billboard-activity-banking-and-finance',
    category: 'Category',
    title: 'Billboard Activity in Banking and Finance',
    description: 'A category view of how financial brands use billboards, and where they overlap.',
    date: '2026-09-18',
    readTime: '9 min read',
    coverVariant: 4,
    isSample: true,
    body: sampleBody(
      'Financial brands are heavy users of out-of-home. This category view shows where they overlap and where room remains.',
      'In this report',
      [
        'Share of Voice across the category',
        'Location overlap between brands',
        'Gaps by city and format',
      ],
      'Replace this sample with the final report summary and a download link.',
    ),
  },
  {
    slug: 'retail-and-fmcg-billboard-activity',
    category: 'Category',
    title: 'Retail and FMCG Billboard Activity',
    description: 'How retail and consumer goods brands choose locations and time their campaigns.',
    date: '2026-09-05',
    readTime: '9 min read',
    coverVariant: 2,
    isSample: true,
    body: sampleBody(
      'Retail and FMCG brands often follow consumer traffic closely. This report looks at their location choices and seasonality.',
      'In this report',
      [
        'Location patterns near retail and residential areas',
        'Seasonal campaign timing',
        'Benchmarks for category activity',
      ],
      'Replace this sample with the final report summary and a download link.',
    ),
  },
  {
    slug: 'city-comparison-jakarta-bandung-surabaya',
    category: 'Regional',
    title: 'City Comparison: Jakarta, Bandung, and Surabaya',
    description:
      'A side by side look at billboard activity and audience characteristics across three major cities.',
    date: '2026-08-22',
    readTime: '11 min read',
    coverVariant: 3,
    isSample: true,
    body: sampleBody(
      'Each city has its own rhythm. This comparison puts three major cities side by side to help with location and budget decisions.',
      'In this report',
      ['Billboard density by area', 'Audience movement patterns', 'Category presence by city'],
      'Replace this sample with the final report summary and a download link.',
    ),
  },
  {
    slug: 'audience-mobility-and-ooh-reach',
    category: 'Audience',
    title: 'Audience Mobility and OOH Reach',
    description:
      'How movement data helps estimate who a billboard can reach, and where the estimates have limits.',
    date: '2026-08-12',
    readTime: '8 min read',
    coverVariant: 5,
    isSample: true,
    body: sampleBody(
      'Mobility data is the foundation of modern reach estimation. This report explains the approach and its limits in plain terms.',
      'In this report',
      [
        'How reach and impressions are estimated',
        'What mobility data can and cannot show',
        'How to read estimates responsibly',
      ],
      'Replace this sample with the final report summary and a download link.',
    ),
  },
]
