import ActionCall from './about/cta';
import { aboutPageFetch } from './about/data';
import Members from './about/members';
import BodyText from './utility/body';
import Heading from './utility/heading';

export const getStaticProps = async () => {
  return {
    props: {
      pageData: await aboutPageFetch()
    }
  };
};

const About = ({ pageData }) => {
  const cta = { ...pageData.cta[0] };
  const { body, team } = { ...pageData };
  const { founders, members } = {
    founders: team.filter((member) => member.founder),
    members: team
      .filter((member) => !member.founder)
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
  };

  return (
    <>
      <Heading heading={pageData.heading} />
      <div className="max-w-[85vw] prose mx-auto normal-case text-foreground-500 md:max-w-prose snap-center">
        <BodyText value={body} />
      </div>
      <Members team={founders} founders />
      <Members team={members} />
      <ActionCall {...cta} />
    </>
  );
};

export default About;
