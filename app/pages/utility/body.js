import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const BodyText = ({ value }) => {
  const components = {
    marks: {
      internalLink: ({ children }) => {
        return (
          <Link href={`/blog/posts/`}>
            <a className="text-foreground-500 hover:text-primary-500">
              {children}
            </a>
          </Link>
        )
      },
      externalLink: ({ children, value }) => (
        <Link href={value.url} passHref>
          <a className="text-foreground-500 hover:text-primary-500" target="_blank" rel="noopener">
            {children}
          </a>
        </Link>
      )
    }
  }

  return (
    <div className="max-w-[85vw] prose mx-auto normal-case text-foreground-500 md:max-w-prose snap-center mb-8">
      <PortableText value={value} components={components} />
    </div>
  )
}
export default BodyText
