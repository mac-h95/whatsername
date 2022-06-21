import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from 'sanity';

const Thumbnails = ({ images, currentIndex, setIndex }) => (
  <div className="flex flex-col space-y-2">
    {images.map((image, index) => (
      <div
        key={image.asset.id}
        className={`flex items-center justify-center cursor-pointer ${
          index === currentIndex && 'border-2 border-primary-500'
        }`}
        onClick={() => setIndex(index)}
      >
        <Image
          src={urlFor(image)}
          alt={image.alt}
          width={100}
          height={100}
          className={`${
            index === currentIndex && 'opacity-25 border-2 border-primary-500'
          }`}
        />
      </div>
    ))}
  </div>
);

const MainImage = ({ image }) => (
  <Image src={urlFor(image)} alt={image.alt} width={500} height={500} />
);

const ImagesPanel = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-start justify-center space-y-4 md:space-x-2 md:space-y-0 md:flex-row">
      <MainImage image={images[index]} />
      <Thumbnails images={images} currentIndex={index} setIndex={setIndex} />
    </div>
  );
};

export default ImagesPanel;
