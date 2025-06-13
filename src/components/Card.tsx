import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  image: string
  title: string
  description: string
  width: number
  height: number
  href: string
}

export default function Card({
  image,
  title,
  description,
  width,
  height,
  href
}: CardProps) {
  return (
    <article className="rounded-xl border border-zinc-100 shadow-xl overflow-hidden transition-shadow hover:shadow-2xs h-full flex flex-col max-w-md">
      <Link href={href} className="cursor-pointer">
        <div className="relative w-full h-52">
          <Image
            src={image}
            alt={`image of ${title} algorithm`}
            className="w-full h-full object-cover rounded-lg"
            width={width}
            height={height}
          />
        </div>
        <div className="px-3 py-2 m-2">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </Link>
    </article>
  )
}
