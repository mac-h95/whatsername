import { useState } from 'react';

const Thumbnails = ({ images, currentIndex, setIndex }) => (
  <div className="flex flex-col space-y-2">
    {images.map((image, index) => (
      <div
        key={image.asset.id}
        className={`flex items-center justify-center ${
          index === currentIndex ? 'bg-gray-200' : 'bg-gray-100'
        }`}
        onClick={() => setIndex(index)}
      >
        <Image src={urlFor(image)} alt={image.alt} width={100} height={100} />
      </div>
    ))}
  </div>
);

const MainImage = ({ image }) => (
  <Image src={urlFor(image)} alt={image.alt} width={600} height={600} />
);

const ImagesPanel = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:flex-row">
      <Thumbnails images={images} currentIndex={index} setIndex={setIndex} />
      <MainImage image={images[index]} />
    </div>
  );
};
