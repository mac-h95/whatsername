import ActionCall from './about/cta';
import { aboutPageFetch } from './about/data';
import Members from './about/list';
import BodyText from './utility/body';
import Heading from './utility/heading';

export const getStaticProps = async () => {
  const { cta, body, team, heading } = await aboutPageFetch();
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

  return {
    props: {
      cta,
      body,
      founders,
      members,
      heading
    }
  };
};

const About = ({ cta, body, founders, members, heading }) => {
  return (
    <>
      <Heading heading={heading} />
      <BodyText value={body} />
      <Members team={founders} founders />
      <Members team={members} />
      <ActionCall {...cta} />
    </>
  );
};

export default About;
