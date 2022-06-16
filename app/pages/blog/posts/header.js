import { getFullDateString } from 'date';
import Icon from 'icon';
import NextHead from 'next/head';
import Image from 'next/image';
import { urlFor } from 'sanity';

const Header = ({ title, metadata, cover, date, author }) => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={metadata.description}></meta>
      <meta name="keywords" content={metadata.keywords}></meta>
      <meta name="image" content={urlFor(metadata.image)}></meta>
      <meta name="og:title" content={title}></meta>
      <meta name="og:description" content={metadata.description}></meta>
      <meta name="og:keywords" content={metadata.description}></meta>
      <meta name="og:image" content={urlFor(metadata.image)}></meta>
    </NextHead>
    <div>
      <Image src={urlFor(cover)} alt={title} width={'700px'} height={'400px'} />
      <div>
        <h1>{title}</h1>
        <span>
          <Icon name="FiCalendar" provider="fi" /> {getFullDateString(date)}
        </span>
        <span>
          <Icon name="FiClock" provider="fi" /> 5m
        </span>
      </div>
      <a href={author.link} target="_blank" rel="noopener">
        <Image
          src={urlFor(author.image)}
          alt={author.name}
          width={'70px'}
          height={'70px'}
        />
        <span>{author.name}</span>
      </a>
    </div>
  </>
);
