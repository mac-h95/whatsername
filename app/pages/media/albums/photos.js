import Icon from 'icon';
import { urlFor } from 'sanity';
import checkPhotographers from './sort-photogtaphers';

export default function Photos({ images }) {
  const photogtaphers = checkPhotographers(images);
  return (
    <div className="">
      <div
        id="photos"
        className="flex flex-col items-center w-screen px-8 space-y-16"
      >
        {photogtaphers.map((photographer) => (
          <div key={photographer.name}>
            <a
              href={photographer.link}
              className="flex items-baseline space-x-2"
            >
              <Icon name="FiCamera" provider="fi" />
              <span>{photographer.name}</span>
            </a>
            <div className="sm:masonry-sm md:masonry-md masonry">
              {images
                .filter(
                  (image) => image.photographer.name === photographer.name
                )
                .map((image) => (
                  <img
                    className="mt-2 md:mt-0"
                    key={image.id}
                    src={urlFor(image.image)}
                    alt={image.alt}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
