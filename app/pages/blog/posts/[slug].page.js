import BodyText from 'pages/utility/body';
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
    <BodyText value={post.body} />
  </div>
);

export default Post;
