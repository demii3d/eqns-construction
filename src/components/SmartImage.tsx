import { useState } from 'react'
import { cn } from '../lib/cn'
import type { ImageAsset } from '../data/images'

interface Props {
  image: ImageAsset
  /** CSS aspect ratio e.g. "4 / 3". Defaults to the image's natural ratio */
  ratio?: string
  sizes?: string
  eager?: boolean
  className?: string
  imgClassName?: string
  /** When true the image fills a parent that already controls its size */
  fill?: boolean
  position?: string
}

/** Image with reserved space, lazy loading and an on-brand fallback if it fails. */
export function SmartImage({ image, ratio, sizes = '100vw', eager = false, className, imgClassName, fill = false, position }: Props) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      className={cn('overflow-hidden bg-deep', fill ? 'absolute inset-0' : 'relative', className)}
      style={fill ? undefined : { aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
    >
      {failed ? (
        <div role="img" aria-label={image.alt} className="img-fallback absolute inset-0 flex items-center justify-center">
          <span className="font-display text-sm font-bold tracking-[0.4em] text-champagne/70">EQNS</span>
        </div>
      ) : (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding={eager ? 'sync' : 'async'}
          fetchPriority={eager ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          style={position ? { objectPosition: position } : undefined}
          className={cn('h-full w-full object-cover', imgClassName)}
        />
      )}
    </div>
  )
}
