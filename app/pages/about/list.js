import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Member = ({ link, name, pronouns, image, role, founder }) => (
  <Link href={link ? link : '/about'} passHref>
    <a target="_blank" rel="noopener">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center mb-4 space-x-1">
          <h3 className="font-bold">{name}</h3>
          <small
            className={`text-[12px] ${
              founder ? 'text-background-300' : 'text-foreground-700'
            }`}
          >
            ({pronouns})
          </small>
        </div>
        <Image src={urlFor(image)} alt={name} width={300} height={300} />
        <small className="text-[12px] font-bold">{role}</small>
      </div>
    </a>
  </Link>
);

const Members = ({ team, founders }) => {
  return (
    <div
      className={`w-screen  grid place-items-center py-8 mt-7 snap-center  ${
        founders &&
        'bg-primary-500 text-background-500 pt-24 md:py-32 md:min-h-[70vh]'
      }`}
    >
      {founders && (
        <h2 className="mb-16 -mt-16 text-3xl font-semibold tracking-widest text-background-500">
          Meet The Team
        </h2>
      )}
      <div className="flex-list">
        {team.map((member) => (
          <Member key={member.name} {...member} founder={founders} />
        ))}
      </div>
    </div>
  );
};

export default Members;
