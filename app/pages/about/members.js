import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Member = ({ link, name, pronouns, image, role, founder }) => (
  <Link href={link ? link : '/about'}>
    <a target="_blank" rel="noopener">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center mb-2 space-x-1">
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
      className={`w-screen  grid place-items-center py-4 mt-7 snap-center  ${
        founders && 'bg-primary-500 text-background-500 h-[80vh]'
      }`}
    >
      {founders && (
        <h2 className="my-4 text-3xl font-bold text-background-500">
          Meet The Team
        </h2>
      )}
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-4">
        {team.map((member) => (
          <Member key={member.name} {...member} founder={founders} />
        ))}
      </div>
    </div>
  );
};

export default Members;
