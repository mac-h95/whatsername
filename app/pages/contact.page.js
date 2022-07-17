import { contactPageFetch } from './contact/data';
import Heading from './utility/heading';
import Form from './contact/form';

export const getStaticProps = async () => {
  const { heading } = await contactPageFetch();
  return {
    props: {
      heading
    }
  };
};

const Contact = ({ heading }) => (
  <>
    <Heading heading={heading} />
    <Form />
  </>
);

export default Contact;
