import Image from 'next/image';
import Link from 'next/link';
import BodyText from 'pages/utility/body';
import { urlFor } from 'sanity';
import { postPageFetch, postPathFetch } from '../data';
import Header from './header';

export const getStaticPaths = async () => {
  return {
    paths: await postPathFetch(),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: await postPageFetch(params.slug)
    }
  };
};

const Post = ({ post }) => (
  <div>
    <Header {...post} />
    <div className="max-w-[85vw] prose mx-auto normal-case text-foreground-500 md:max-w-prose snap-center">
      <BodyText value={post.body} />
      <Link href={post.author.link}>
        <a
          className="flex items-center space-x-2 no-underline text-foreground-500"
          target="_blank"
          rel="noopener"
        >
          <Image
            src={urlFor(post.author.image)}
            alt={post.author.name}
            width={'60px'}
            height={'60px'}
            style={{ borderRadius: '50%' }}
          />
          <div className="flex flex-col text-left">
            <span>{post.author.name}</span>
            <span>{post.author.role}</span>
          </div>
        </a>
      </Link>
    </div>
  </div>
);

export default Post;
