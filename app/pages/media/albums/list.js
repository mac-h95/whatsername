import { urlFor } from 'sanity';
import Photographer from './photographer';
import Image from 'next/image';
import checkPhotographers from './sort-photogtaphers';

export default function PhotoList({ images }) {
  const photogtaphers = checkPhotographers(images);
  return (
    <>
      <div
        id="photos"
        className="flex flex-col items-center w-screen px-8 space-y-16"
      >
        {photogtaphers.map((photographer) => (
          <div key={photographer.name}>
            <Photographer {...photographer} />
            <div className="sm:masonry-sm md:masonry-md masonry">
              {images
                .filter(
                  (image) => image.photographer.name === photographer.name
                )
                .map((image) => (
                  <Image
                    key={image.caption}
                    src={urlFor(image.image)}
                    alt={image.caption}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
