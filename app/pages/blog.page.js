import Heading from 'heading';
import { blogPageFetch } from './blog/data';
import PostList from './blog/list';

export const getStaticProps = async ({}) => {
  const { heading, posts } = await blogPageFetch();
  return {
    props: {
      heading,
      posts
    }
  };
};

const Blog = ({ heading, posts }) => (
  <>
    <Heading heading={heading} />
    <PostList posts={posts} />
  </>
);

export default Blog;
