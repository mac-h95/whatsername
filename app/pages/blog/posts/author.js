import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Author = ({ link, name, image, role }) => (
  <Link href={link}>
    <a
      className="flex items-center space-x-2 no-underline text-foreground-500"
      target="_blank"
      rel="noopener"
    >
      <Image
        src={urlFor(image)}
        alt={name}
        width={60}
        height={60}
        style={{ borderRadius: '50%' }}
      />
      <div className="flex flex-col text-left">
        <span className="font-bold">{name}</span>
        <span>{role}</span>
      </div>
    </a>
  </Link>
);

export default Author;
