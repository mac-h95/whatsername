import { getDateString } from 'date';
import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Post = ({ slug, cover, title, snippet, date }) => (
  <Link href={`/blog/posts/${slug.current}`}>
    <a
      className="flex flex-col items-center space-x-2 space-y-2 text-center md:space-y-0 md:text-left md:flex-row"
      key={slug.current}
    >
      <Image src={urlFor(cover)} alt={title} width={250} height={140.63} />
      <div className="flex flex-col items-center md:block">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="truncate md:overflow-auto max-w-[280px] md:max-w-lg md:whitespace-normal text-foreground-700 md:max-w-none">
          {snippet}
        </p>
        <span className="flex items-center space-x-1 ">
          <Icon name="FiCalendar" provider="fi" />
          <span>{getDateString(date)}</span>
        </span>
        <span className="flex items-center space-x-1 lowercase">
          <Icon name="FiClock" provider="fi" /> <span>5min</span>
        </span>
      </div>
    </a>
  </Link>
);

const PostList = ({ posts }) => (
  <>
    <Link href={`/blog/posts/${posts[0].slug.current}`}>
      <a className="flex flex-col items-center max-w-xs mb-8 md:items-start md:max-w-none">
        <Image
          src={urlFor(posts[0].cover)}
          alt={posts[0].title}
          width={800}
          height={450}
        />
        <div className="text-center md:text-left">
          <h2 className="font-bold tracking-wider md:text-4xl">
            {posts[0].title}
          </h2>
          <p>{posts[0].snippet}</p>
          <span className="flex flex-col items-center justify-center mx-auto md:flex-row md:justify-start">
            <span className="flex items-center space-x-1 ">
              <Icon name="FiCalendar" provider="fi" />
              <span>{getDateString(posts[0].date)}</span>
            </span>
            <span className="flex items-center space-x-1 lowercase">
              <Icon name="FiClock" provider="fi" />
              <span>5min</span>
            </span>
          </span>
        </div>
      </a>
    </Link>
    <div className="flex flex-col items-center space-y-4">
      {posts.slice(1).map((post) => (
        <Post
          key={post.slug.current}
          slug={post.slug.current}
          cover={post.cover}
          title={post.title}
          date={post.date}
          snippet={post.snippet}
        />
      ))}
    </div>
  </>
);

export default PostList;
