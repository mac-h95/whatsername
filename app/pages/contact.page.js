import { contactPageFetch } from './index/data';
import Heading from './utility/heading';

export const getStaticProps = async () => {
  const { heading } = await contactPageFetch();
  return {
    props: {
      heading
    }
  };
};

const Contact = ({ heading}) => {
  return <Heading heading={heading} />;
};

export default Contact;
