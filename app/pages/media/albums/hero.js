import { getFullDateString } from 'date';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Hero = ({ cover, artist, venue, date }) => (
  <div className="grid w-screen min-h-screen place-items-center">
    <Image src={urlFor(cover)} alt={artist} layout="fill" objectFit="cover" />
    <div className="z-40 flex flex-col items-center pb-64 ">
      <h1 className="font-bold tracking-widest md:text-8xl">{artist}</h1>
      <span className="mt-4 mb-8">{`${venue.name}, ${getFullDateString(
        date
      )}`}</span>
      <Link href="#photos">
        <button className="px-12 py-1">Open</button>
      </Link>
    </div>
  </div>
);

export default Hero;
