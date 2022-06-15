import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanity = sanityClient({
  projectId: '878j5f8u',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2021-10-21'
});

export function urlFor(source) {
  return imageUrlBuilder.image(sanity, source);
}

export default sanity;
