import type { ContentItem } from '../contracts'
import { guideBody, section } from './section'

/** Playlog Insight. Drop real covers in `image` (for example /media/insights/<slug>.webp) when ready. */
export const articleItems: ContentItem[] = [
  {
    slug: 'billboard-advertising-rewind-indonesia-2025',
    category: 'Report',
    badge: 'Annual Insights Report 2025',
    title: 'Billboard Advertising Rewind Indonesia 2025',
    description:
      'Explore Indonesia’s billboard advertising landscape, from top-spending industries and brands to market activity, regional trends, and Ramadan advertising.',
    date: '2026-05-12',
    coverVariant: 0,
    tags: ['Annual Insights Report 2025'],
    body: [
      ...section('executive-summary', 'Executive Summary', [
        'Billboard advertising in Indonesia continued to grow throughout 2025 with brands increasingly using both conventional and digital billboards to maintain visibility across major cities.',
        'Playlog’s Billboard Advertising Rewind Indonesia 2025 provides a data-driven look at how the billboard market moved through the year, covering advertising spend, impressions, media distribution, leading industries, brand activity, and regional competition.',
        'The report analyzed billboard activity across 24 major cities in Indonesia, providing a broader view of where brands invested and how OOH visibility was distributed across the market.',
      ]),
      {
        type: 'metrics',
        id: 'key-market-metrics',
        heading: 'Key Market Metrics',
        description:
          'Annualized high-level totals indicating robust physical and programmatic performance.',
        metrics: [
          { value: 'IDR 6.34T', label: 'Estimated Spend (Jan–Nov 2025)' },
          { value: '+19.41%', label: 'Year-on-Year Growth' },
          { value: 'IDR 2.60T', label: 'Digital Billboard Investment' },
        ],
        note: 'Billboard advertising recorded approximately IDR 6.34 trillion in estimated advertising spend between January and November 2025, representing 19.41% growth year-on-year. Conventional billboards accounted for approximately IDR 3.73 trillion, while digital billboards reached around IDR 2.6 trillion.',
      },
      {
        type: 'steps',
        id: 'what-the-data-tells-us',
        heading: 'What the Data Tells Us',
        items: [
          'Billboard advertising continued to grow despite the rise of digital media.',
          'Digital billboard investment continued to expand.',
          'Major cities remained highly competitive for OOH visibility.',
          'Brands increasingly maintained billboard presence beyond seasonal campaigns.',
          'Creative rotation became an important part of billboard activity.',
        ],
      },
      ...section('industry-leaders', 'Who Dominated Billboard Advertising?', [
        'The report maps the leading industries and brands based on advertising spend and impressions. Among the industries tracked, cigarettes, banking and finance, and transportation were among the leading categories by billboard impressions.',
        'For example, in the beauty category, the data showed that high spending did not always translate directly into the highest impressions, highlighting how placement strategy and media efficiency can matter as much as budget size.',
      ]),
      ...section('regional-visibility', 'Where Were Brands Most Visible?', [
        'The report also looks at billboard activity across Indonesian cities and provinces. The data highlights strong billboard activity in areas such as DKI Jakarta and West Java, while other regions increasingly emerged as alternative opportunities for brands looking beyond the most competitive markets.',
        'This makes the question less about “Where can we put a billboard?” and more about “Where should our brand be visible?”',
      ]),
      {
        type: 'points',
        id: 'ramadan-strategy',
        heading: 'Ramadan: When Billboard Strategy Changes',
        items: [
          { text: 'Ramadan advertising investment' },
          { text: 'Marketing objectives' },
          { text: 'Creative trends' },
          { text: 'Messaging themes' },
          { text: 'How brands adapted their communication during the period' },
        ],
      },
      {
        type: 'callout',
        id: 'key-takeaway',
        heading: 'Key Takeaway',
        paragraphs: [
          'Billboard is no longer simply about being seen. As competition increases, brands need to understand where competitors are investing, how much visibility different placements can generate, and how media strategy changes across markets and moments.',
        ],
      },
    ],
    note: {
      label: 'Methodology note',
      paragraphs: [
        'The research uses Playlog’s billboard monitoring data across 24 major Indonesian cities. Figures are estimates generated from Playlog’s monitoring system and should be treated as market intelligence rather than audited financial data.',
      ],
    },
  },
  {
    slug: 'indonesia-banking-billboard-advertising-index-q1-2026',
    category: 'Report',
    badge: 'Financial Advertising Report Q1 2026',
    title: 'Indonesia Banking Billboard Advertising Index Q1 2026',
    description:
      'Discover how banking brands compete for billboard visibility through advertising spend, impressions, media distribution, and city-level presence.',
    date: '2026-05-12',
    coverVariant: 1,
    tags: ['Financial Advertising Report Q1 2026'],
    body: [
      ...section('executive-summary', 'Executive Summary', [
        'Indonesia’s banking sector is becoming increasingly strategic in its use of billboard advertising. Beyond simply building awareness, banks are using OOH to strengthen brand presence, maintain visibility in high-traffic areas, and compete for attention across Indonesia’s major cities.',
        'The Indonesia Banking Billboard Advertising Index Q1 2026 examines how banking brands invested in billboard advertising during the first quarter of 2026, looking at advertising spend, impressions, billboard distribution, media formats, and competitive presence across cities.',
        'Playlog positions these reports as part of its broader billboard measurement and market intelligence dataset covering conventional and digital billboards.',
      ]),
      ...section('billboard-battle', 'Who Is Winning the Billboard Battle?', [
        'One of the most interesting findings is that different brands lead on different dimensions of OOH visibility.',
        'OCBC emerged as a leading player by advertising spend and impressions, with Bank BJB standing out in terms of billboard volume. Meanwhile, several major banks, including BTN, BNI, and Mandiri, showed stronger adoption of digital billboard formats.',
        'This creates a more nuanced picture of competition: spending more is not equal to having the largest footprint, and having more billboards does not necessarily generate the highest exposure.',
      ]),
      {
        type: 'metrics',
        id: 'ocbc-leadership',
        heading: 'OCBC: Leading in Spend & Impressions',
        description:
          'OCBC recorded approximately IDR 20.8 billion in billboard advertising spend and generated around 573 million impressions during the period covered by the research.',
        metrics: [
          { value: 'IDR 20.8B', label: 'Estimated Spend' },
          { value: '~573M', label: 'Impressions' },
          { value: '16 : 1', label: 'Digital to static billboards' },
        ],
        note: 'Its media strategy was heavily weighted toward digital formats, with 16 digital billboards compared with one conventional billboard.',
      },
      ...section('different-cities', 'Different Cities, Different Leaders', [
        'The competitive picture changes when the data is viewed geographically. Rather than having one bank dominate every market, different brands can emerge as stronger players depending on the city, media format, and distribution strategy.',
        'This means a national ranking alone does not tell the full story. For advertisers, the more useful question becomes: where is each competitor strongest, and where are the opportunities they haven’t fully captured?',
      ]),
      ...section('format-strategy', 'Conventional vs. Digital Billboard Strategy', [
        'Banking brands are also showing different preferences when it comes to media format. Some brands continue to build broad visibility through conventional billboard networks, while others are increasingly adopting digital billboard placements.',
        'A smarter competitive analysis needs to connect spend, billboard count, format, impressions, city, and competitive presence. Together, these points provide a clearer picture of how banking brands are building visibility in the physical world.',
      ]),
      {
        type: 'callout',
        id: 'key-takeaway',
        heading: 'Key Takeaway',
        paragraphs: [
          'Banking brands aren’t competing for the same audience in the same way. Some prioritize investment. Others prioritize coverage. Some are moving aggressively into digital billboards.',
          'The opportunity for marketers is to understand where competitors are winning, how they are investing, and where there is still room to build visibility.',
        ],
      },
    ],
    note: {
      label: 'Methodology note',
      paragraphs: [
        'The report is part of Playlog’s Q1 2026 Billboard Advertising Market Intelligence series, which covers major Indonesian industries and analyzes billboard activity using Playlog’s proprietary monitoring and measurement data.',
      ],
    },
  },
  {
    slug: 'driving-social-media-virality-through-strategic-physical-placements',
    category: 'Case study',
    badge: 'Case study',
    title: 'Driving Social Media Virality Through Strategic Physical Placements',
    description:
      'Explore how Tokopedia and Duolingo used a strategic billboard placement to drive social media buzz, organic sharing, and millions of views.',
    date: '2026-05-12',
    coverVariant: 2,
    tags: ['LED Billboard', 'Tokopedia × Duolingo'],
    body: [
      ...section('overview', 'Overview', [
        'From internet meme to real-world campaign, Tokopedia and Duolingo’s joint billboard campaign shows how the right creative, location, and audience interaction can extend a physical advertising placement far beyond its physical surroundings.',
        'What started as an internet joke eventually became a collaboration between two brands. In 2023, Indonesian audiences began noticing similarities between Tokopedia and Duolingo’s mascots.',
        'Tokopedia started playing into the joke, and the conversation continued to grow organically. By 2025, Duolingo officially joined the conversation. What followed was a joint campaign that brought the online interaction into the physical world through both online and offline activations.',
      ]),
      {
        type: 'points',
        id: 'physical-space',
        heading: 'From Phone Screen to Physical Space',
        items: [
          {
            title: 'Community-driven collaboration',
            text: 'Tokopedia and Duolingo launched a joint billboard campaign at Mandarin Oriental, Bundaran HI, inspired by the long-running internet meme around their mascots.',
          },
          {
            title: 'Humor-driven creative',
            text: 'The creative used humor and playful interaction between the two brands to create curiosity and attention online.',
          },
          {
            title: 'Massive social amplification',
            text: 'People captured the billboard and organically shared it across social media, extending the campaign from its physical location into online conversations.',
          },
        ],
      },
      {
        type: 'table',
        id: 'campaign-snapshot',
        heading: 'Campaign Snapshot: LED Robotic Mandarin Oriental',
        columns: ['Metric', 'Value'],
        rows: [
          ['Location', 'LED Robotic Mandarin Oriental, Central Jakarta'],
          ['Potential reach / day', '346,062'],
          ['Potential impressions / day', '1,412,080'],
          ['Total impressions (full run)', '69,434,448'],
          ['Peak day impressions', '1,946,553'],
          ['Estimated monthly price', 'IDR 544.5 Million'],
          ['Model eCPM', 'IDR 102,800'],
        ],
      },
      {
        type: 'points',
        id: 'brand-lessons',
        heading: 'What Brands Can Learn From Duo × Tokopedia',
        items: [
          {
            title: 'Start with a conversation people already care about',
            text: 'The campaign built on an existing meme and audience familiarity rather than introducing an entirely new narrative.',
          },
          {
            title: 'Make people want to capture the moment',
            text: 'A creative that sparks humor, curiosity, or surprise has a greater chance of becoming content beyond the billboard itself.',
          },
          {
            title: 'Let location strengthen the idea',
            text: 'A strategic placement can give a creative more visibility and context, creating opportunities for audiences to encounter and share it.',
          },
        ],
      },
      {
        type: 'callout',
        id: 'key-takeaway',
        heading: 'Key Takeaway',
        paragraphs: [
          'The right billboard can do more than deliver impressions. It can start a conversation. Tokopedia × Duolingo’s campaign shows how a strategically placed and highly shareable creative can move from physical visibility to organic digital exposure, extending the reach and life of an OOH campaign.',
        ],
      },
    ],
    note: {
      label: 'The bigger picture',
      paragraphs: [
        'Billboard advertising doesn’t have to end when an audience passes the screen. When creative, location, and audience behavior align, a physical placement can become a trigger for online conversations and organic content.',
        'Don’t just ask how many people will see your billboard. Ask what they might do after they see it.',
      ],
    },
  },
  {
    slug: 'how-to-read-share-of-voice-before-planning-billboards',
    category: 'Guide',
    badge: 'Guide',
    title: 'How to Read Share of Voice Before Planning a Billboard Campaign',
    description:
      'Share of Voice shows how visible a brand is compared with competitors. Here is how to read it before you choose locations.',
    date: '2026-09-22',
    coverVariant: 1,
    isSample: true,
    tags: ['Share of Voice', 'Planning'],
    body: guideBody({
      overview: [
        'Share of Voice (SOV) compares your billboard presence with the other brands in your category. It is one of the quickest ways to see how crowded a market is before you commit budget.',
        'Used early in planning, SOV helps teams choose locations with intent instead of repeating what the category already does.',
      ],
      pointsHeading: 'What SOV Can Tell You',
      points: [
        {
          title: 'Where competitors concentrate',
          text: 'Cities and corridors where several brands compete for the same audience.',
        },
        {
          title: 'Where you are under-represented',
          text: 'Markets where your coverage trails the category even though demand exists.',
        },
        {
          title: 'Where space is still open',
          text: 'Locations with strong audience potential and less competitor activity.',
        },
      ],
      stepsHeading: 'How to Apply It',
      steps: [
        'Define the category and the competitors you want to compare against.',
        'Compare coverage by city and by format, not only in total.',
        'Mark cities where competitors are strong and where they are absent.',
        'Shortlist locations that fit your objective, then check audience data for each.',
      ],
      takeaway: [
        'SOV is a starting point, not a verdict. Pair it with audience and location data before you decide where to be visible.',
      ],
    }),
  },
  {
    slug: 'digital-vs-conventional-billboards-choosing-the-right-format',
    category: 'Guide',
    badge: 'Guide',
    title: 'Digital vs Conventional Billboards: Choosing the Right Format',
    description:
      'Digital and conventional billboards solve different problems. Here is how to match the format to your campaign objective.',
    date: '2026-09-15',
    coverVariant: 2,
    isSample: true,
    tags: ['Digital Billboard', 'Planning'],
    body: guideBody({
      overview: [
        'Conventional billboards give a brand a constant, always-on presence. Digital billboards add flexibility: several creatives, scheduled messages, and the ability to change copy during a flight.',
        'Neither format is better in every case. The right choice depends on the objective, the audience, and how often the message needs to change.',
      ],
      pointsHeading: 'Where Each Format Fits',
      points: [
        {
          title: 'Conventional billboards',
          text: 'Steady visibility for brand building and sustained presence in a fixed location.',
        },
        {
          title: 'Digital billboards',
          text: 'Time-based messages, rotating creatives, and campaigns that need to react to the moment.',
        },
        {
          title: 'A mix of both',
          text: 'Broad coverage from static sites, with digital screens at the highest-traffic points.',
        },
      ],
      stepsHeading: 'How to Choose',
      steps: [
        'Start from the objective: awareness, launch, promotion, or sustained presence.',
        'List how many different messages you need to show.',
        'Check which locations in your target cities offer each format.',
        'Compare delivery proof and reporting options for the formats you shortlist.',
      ],
      takeaway: [
        'Choose the format for the job, not the novelty. A well-placed static site can outperform a weak digital placement.',
      ],
    }),
  },
  {
    slug: 'reading-audience-movement-around-a-billboard',
    category: 'Guide',
    badge: 'Guide',
    title: 'Reading Audience Movement Around a Billboard',
    description:
      'Reach, impressions, and frequency describe different things. Here is how to read audience movement around a location.',
    date: '2026-09-08',
    coverVariant: 0,
    isSample: true,
    tags: ['Audience', 'Measurement'],
    body: guideBody({
      overview: [
        'A billboard’s value depends on who passes it, how often, and in what mode of travel. Audience movement data helps teams understand those patterns around a location.',
        'The three terms used most often are easy to mix up, so it helps to agree on them before comparing sites.',
      ],
      pointsHeading: 'Three Terms to Keep Straight',
      points: [
        { title: 'Reach', text: 'How many different people could see the billboard.' },
        { title: 'Impressions', text: 'How many times the billboard could be seen in total.' },
        { title: 'Frequency', text: 'How often the same person could see it within a period.' },
      ],
      stepsHeading: 'How to Read a Location',
      steps: [
        'Look at traffic by time of day and day of week.',
        'Check the direction of travel against the direction the billboard faces.',
        'Compare reach and frequency, not impressions alone.',
        'Note nearby points of interest that explain why people are there.',
      ],
      takeaway: [
        'High impressions can come from a few people passing often. Reach tells you how many different people you are actually speaking to.',
      ],
    }),
  },
  {
    slug: 'why-creative-rotation-matters-on-digital-billboards',
    category: 'Analysis',
    badge: 'Analysis',
    title: 'Why Creative Rotation Matters on Digital Billboards',
    description:
      'Repeating one creative for weeks wears it out. Here is how rotation keeps a digital billboard campaign fresh.',
    date: '2026-09-01',
    coverVariant: 1,
    isSample: true,
    tags: ['Digital Billboard', 'Creative'],
    body: guideBody({
      overview: [
        'Audiences who pass the same screen every day stop noticing the same message. Digital billboards let brands change creatives across a flight without reprinting anything.',
        'Rotation is also a way to speak to different moments: commuters in the morning, shoppers in the afternoon, and evening traffic with a different message.',
      ],
      pointsHeading: 'What Rotation Makes Possible',
      points: [
        {
          title: 'Fresh messages',
          text: 'New creatives keep a long campaign from fading into the background.',
        },
        {
          title: 'Message by moment',
          text: 'Different copy for different times of day or days of the week.',
        },
        { title: 'Faster learning', text: 'Teams can compare creatives and keep what works.' },
      ],
      stepsHeading: 'How to Plan a Rotation',
      steps: [
        'Prepare more than one creative before the flight starts.',
        'Decide when each creative should appear.',
        'Review proof of play to confirm each creative ran as planned.',
        'Adjust the mix during the flight if a message is not working.',
      ],
      takeaway: [
        'A digital screen is only flexible if the creative plan is. Build the rotation before booking, not after.',
      ],
    }),
  },
  {
    slug: 'beyond-jakarta-finding-billboard-opportunities-in-secondary-cities',
    category: 'Analysis',
    badge: 'Analysis',
    title: 'Beyond Jakarta: Finding Billboard Opportunities in Secondary Cities',
    description:
      'The most competitive markets are not the only ones that matter. Here is how to look for opportunities beyond the usual cities.',
    date: '2026-08-25',
    coverVariant: 2,
    isSample: true,
    tags: ['Regional', 'Planning'],
    body: guideBody({
      overview: [
        'Major cities attract most billboard activity, and with it the most competition for attention. Other regions can offer a clearer path to visibility, depending on the category and the audience.',
        'The question shifts from “Where can we put a billboard?” to “Where should our brand be visible?”',
      ],
      pointsHeading: 'Why Look Beyond the Core Markets',
      points: [
        {
          title: 'Less crowded space',
          text: 'Fewer competitors can mean your message stands out more.',
        },
        {
          title: 'Growing audiences',
          text: 'Regional cities with expanding demand for your category.',
        },
        {
          title: 'Balanced coverage',
          text: 'A national presence that does not depend on a few cities.',
        },
      ],
      stepsHeading: 'How to Evaluate a New Market',
      steps: [
        'Check competitor activity in the city to see how crowded it is.',
        'Review audience movement around candidate locations.',
        'Compare available formats and inventory.',
        'Start with a focused test before scaling the plan.',
      ],
      takeaway: [
        'A second-tier city is not a second-best choice. For some brands it is the first place worth being seen.',
      ],
    }),
  },
  {
    slug: 'billboard-proof-of-play-why-verification-matters',
    category: 'Guide',
    badge: 'Guide',
    title: 'Billboard Proof of Play: Why Verification Matters',
    description:
      'Booking a billboard is not the same as knowing it ran. Here is how verification keeps campaigns accountable.',
    date: '2026-08-18',
    coverVariant: 0,
    isSample: true,
    tags: ['Verification', 'Execution'],
    body: guideBody({
      overview: [
        'Once a campaign is booked, advertisers still need to know that the creative was installed, displayed, and kept in good condition. Verification closes that gap between the plan and what the audience saw.',
        'For digital billboards, proof of play records when each creative ran. For conventional billboards, it relies on installation checks and site photos.',
      ],
      pointsHeading: 'What Verification Covers',
      points: [
        {
          title: 'Installation',
          text: 'Confirming the creative went up at the right site on the right date.',
        },
        { title: 'Display', text: 'Checking that digital creatives played on schedule.' },
        { title: 'Condition', text: 'Spotting damage or obstruction that reduces visibility.' },
      ],
      stepsHeading: 'How to Use It',
      steps: [
        'Agree the verification method with the media owner before the flight.',
        'Review reports at set points during the campaign.',
        'Raise gaps early so they can be fixed within the flight.',
        'Keep the records for post-campaign reporting.',
      ],
      takeaway: [
        'Verification turns a booking into evidence. Without it, reporting rests on trust alone.',
      ],
    }),
  },
]
