import NextHead from 'next/head';
import { urlFor } from 'sanity';

const Head = ({ page, title, description, metaImage, themeColor, favicon }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{`${page ? page : ''} ${title}`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://whatsername.co.uk" />
    <meta property="og:image" content={metaImage} />
    <meta property="og:locale" content="en_GB" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content={themeColor} />
    <link rel="icon" href={urlFor(favicon)} />
    <link rel="canonical" href="https://whatsername.co.uk" />
  </NextHead>
);

export default Head;
