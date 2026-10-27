import type { ContentItem } from '@/shared/content'
import { InsightCover } from './insight-cover'

/** Real cover when `image` is set, typographic cover otherwise. */
export function ContentCover({
  item,
  size = 'card',
  className,
}: {
  item: ContentItem
  size?: 'card' | 'hero'
  className?: string
}) {
  if (item.image) {
    return (
      <img
        src={item.image}
        alt=""
        loading={size === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
        style={{ clipPath: 'polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 32px)' }}
        className={className ? `${className} object-cover` : 'size-full object-cover'}
      />
    )
  }
  return (
    <InsightCover
      title={item.title}
      badge={item.badge}
      variant={item.coverVariant}
      size={size}
      className={className ?? 'size-full'}
    />
  )
}
