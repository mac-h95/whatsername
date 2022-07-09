import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const BodyText = ({ value }) => {
  const serializers = {
    marks: {
      internalLink: ({ mark, children }) => (
        <Link href={`/blog/posts/${mark.slug.current}`}>
          <a>{children}</a>
        </Link>
      ),
      externalLink: ({ mark, children }) => (
        <Link href={mark.url}>
          <a>{children}</a>
        </Link>
      )
    }
  }

  return (
    <div className="max-w-[85vw] prose mx-auto normal-case text-foreground-500 md:max-w-prose snap-center mb-8">
      <PortableText value={value} serializers={serializers} />
    </div>
  )
}
export default BodyText
