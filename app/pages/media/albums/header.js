import { getFullDateString } from 'date';
import NextHead from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Header = ({ title, seo, cover, artist, venue, date }) => (
  <>
    <NextHead>
      <title>{`${artist} at ${venue} - ${date}`}</title>
      <meta name="title" content={`${artist} at ${venue.name} - ${date}`} />
      <meta name="description" content={seo.description}></meta>
      <meta name="keywords" content={seo.keywords}></meta>
      <meta name="image" content={urlFor(seo.image)}></meta>
      <meta name="og:title" content={title}></meta>
      <meta name="og:description" content={seo.description}></meta>
      <meta name="og:keywords" content={seo.keywords}></meta>
      <meta name="og:image" content={urlFor(seo.image)}></meta>
    </NextHead>
    <div className="grid w-screen min-h-screen place-items-center">
      <Image
        src={urlFor(cover)}
        alt={artist}
        layout="fill"
        objectFit="cover"
        style={{ marginTop: '-3rem' }}
      />
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
  </>
);

export default Header;
