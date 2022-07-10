import Image from 'next/image'
import { useState } from 'react'
import { urlFor } from 'sanity'

const Thumbnails = ({ images, currentIndex, setIndex }) => (
  <div className="flex md:flex-col md:space-y-2">
    {images.map((image, index) => (
      <div
        key={image.asset._ref}
        className={`flex items-center ml-2 md:ml-0 justify-center cursor-pointer ${
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
)

const MainImage = ({ image }) => (
  <Image src={urlFor(image)} alt={image.alt} width={500} height={500} placeholder="blur" blurDataUrl="https://whatsername.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F878j5f8u%2Fproduction%2Fbf266e94bfc6a4e9c9ce4ae33b3559870b98bb09-750x938.jpg&w=1080&q=75" />
)

const ImagesPanel = ({ images }) => {
  const [index, setIndex] = useState(0)

  return (
    <div className="flex flex-col items-start justify-center space-y-4 md:space-x-2 md:space-y-0 md:flex-row">
      <MainImage image={images[index]} />
      <Thumbnails images={images} currentIndex={index} setIndex={setIndex} />
    </div>
  )
}

export default ImagesPanel
