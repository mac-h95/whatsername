import { getFullDateString } from 'date';
import Icon from 'icon';
import NextHead from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const MetaData = ({ title, metadata }) => (
  <NextHead>
    <title>{`${title} | Whatsername`}</title>
    <meta name="title" content={title} />
    <meta name="description" content={metadata.description}></meta>
    <meta name="keywords" content={metadata.keywords}></meta>
    <meta name="image" content={urlFor(metadata.image)}></meta>
    <meta name="og:title" content={title}></meta>
    <meta name="og:description" content={metadata.description}></meta>
    <meta name="og:keywords" content={metadata.description}></meta>
    <meta name="og:image" content={urlFor(metadata.image)}></meta>
  </NextHead>
);

const Header = ({ title, metadata, cover, date }) => (
  <>
    <MetaData title={title} metadata={metadata} />
    <div className="relative flex flex-col items-center max-w-sm px-4 mt-8 mb-10 space-y-2 md:px-16 md:max-w-none md:items-start">
      <Link href="/blog">
        <a className="absolute left-0 md:-left-2 md:top-0 -top-8 text-primary-500 hover:text-primary-600">
          <span className="flex items-center space-x-2 text-sm">
            <span className="text-2xl">
              <Icon name="FiChevronLeft" provider="fi" />
            </span>
            Back
          </span>
        </a>
      </Link>
      <Image src={urlFor(cover)} alt={title} width={800} height={400} />
      <div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold tracking-wider md:text-4xl">
            {title}
          </h2>
          <div className="flex items-center justify-center md:justify-between md:items-start">
            <span className="flex flex-col items-center justify-center max-w-sm mx-0 md:space-x-3 md:flex-row md:items-start">
              <span className="flex items-center space-x-1 ">
                <Icon name="FiCalendar" provider="fi" />
                <span>{getFullDateString(date)}</span>
              </span>
              <span className="flex items-center space-x-1 lowercase">
                <Icon name="FiClock" provider="fi" />
                <span>5min</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
