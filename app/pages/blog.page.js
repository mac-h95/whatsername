import Heading from 'heading';
import { blogPageFetch } from './blog/data';
import PostList from './blog/post';

export const getStaticProps = async ({}) => {
  return {
    props: {
      pageData: await blogPageFetch()
    }
  };
};

const Blog = ({ pageData }) => (
  <div>
    <Heading heading={pageData.heading} />
    <PostList posts={pageData.posts} />
  </div>
);

export default Blog;
