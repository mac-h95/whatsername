import BodyText from 'pages/utility/body';
import { postPageFetch, postPathFetch } from '../data';
import Author from './author';
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

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <Header {...post} />
      <BodyText value={post.body} />
      <Author {...post.author} />
    </>
  );
};

export default Post;
