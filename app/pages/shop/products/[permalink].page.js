import { commerce } from 'commerce';
import Icon from 'icon';
import NextHead from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export const getStaticPaths = async () => {
  const { data: products } = await commerce.products.list();
  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink
      }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => ({
  props: {
    product: await commerce.products.retrieve(params.permalink, {
      type: 'permalink'
    })
  },
  revalidate: 60
});

const Product = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const images = product.assets.filter((asset) => asset.is_image === true);

  return (
    <div>
      <NextHead>
        <title>{product.name} | Whatsername</title>
        <meta name="title" content={`${product.name} | Whatsername`} />
        <meta name="description" content={product.description}></meta>
        <meta name="keywords" content={product.category}></meta>
        <meta name="image" content={product.image.url}></meta>
        <meta name="og:title" content={`${product.name} | Whatsername`}></meta>
        <meta name="og:description" content={product.description}></meta>
        <meta name="og:keywords" content={product.description}></meta>
        <meta name="og:image" content={product.image.url}></meta>
      </NextHead>
      <div className="flex flex-col w-screen px-6 md:justify-center md:space-x-20 md:px-32 md:flex-row">
        <div className="flex flex-col space-y-4 text-center">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <div
            className="md:max-w-sm"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <span>{product.price_formatted_with_symbol}</span>
          <div className="flex flex-col space-y-4">
            {product.variant_groups.map((variantGroup) => (
              <div key={variantGroup.id} className="flex flex-col space-y-4">
                <label>{variantGroup.name}</label>
                <select className="w-1/2 px-4 py-2 mx-auto text-center bg-transparent border-0 border-b-2 border-gray-300 text-foreground-500 placeholder:text-gray-700 focus:outline-none focus:border-primary-500">
                  onChange=
                  {(e) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      [variantGroup.id]: e.target.value
                    })
                  }
                  >
                  {variantGroup.options.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            {product.extra_fields.map((extra_field) => (
              <div key={extra_field.id} className="flex flex-col space-y-2">
                <label>{extra_field.name}</label>
                <input
                  className="w-1/2 px-4 py-2 mx-auto text-center bg-transparent border-0 border-b-2 border-gray-300 placeholder:text-gray-700 focus:outline-none text-foreground-500 focus:border-primary-500"
                  type="text"
                  name={extra_field.name}
                  placeholder={extra_field.name}
                />
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center py-2 mx-auto space-x-2">
            <span className="text-2xl">
              <Icon name="FiShoppingCart" provider="fi" />
            </span>
            <span>Add to Cart</span>
          </button>
        </div>
        <div className="flex flex-col mt-8 md:flex-row">
          <div className="hidden md:mr-5 md:block">
            <Image
              src={images[imageIndex].url}
              alt={product.name}
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col items-center space-y-2 h-82 overflox-y-scroll">
            {images.map((image, index) => (
              <div
                className={`relative w-[80vw] h-[300px] md:w-24 md:h-24 cursor-pointer ${
                  index === imageIndex && 'border-primary-500 border-2'
                }`}
                key={index}
                onClick={() => setImageIndex(index)}
              >
                <Image
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  onClick={() => setImageIndex(index)}
                  layout="fill"
                  style={{
                    opacity: index === imageIndex ? 1 : 0.5
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
