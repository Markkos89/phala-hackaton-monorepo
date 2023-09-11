import Image, { ImageProps } from 'next/image'

export const DefaultImage = ({
  src,
  alt = '',
  placeholder = 'blur',
  blurDataURL = 'data:...',
  ...props
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}
