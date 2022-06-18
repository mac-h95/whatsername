import { getDateString } from 'date';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Album = ({ slug, cover, title, date, artist, venue }) => (
  <Link href={`/media/albums/${slug.current}`}>
    <a
      key={slug}
      className="flex flex-col items-center justify-center px-4 space-y-2 text-center md:my-9 md:px-0 md:space-y-0 md:mr-9"
    >
      <Image src={urlFor(cover)} alt={title} width={400} height={250} />
      <div>
        <h3 className="text-xl font-bold">{artist}</h3>
        <span>
          {venue.name}, {getDateString(date)}
        </span>
      </div>
    </a>
  </Link>
);

const AlbumList = ({ albums }) => (
  <div className="flex flex-col items-center space-y-8 md:justify-center md:space-y-0 md:flex-wrap md:flex-row">
    {albums.map((album) => (
      <>
        <Album key={album.slug.current} {...album} />
      </>
    ))}
  </div>
);

export default AlbumList;
