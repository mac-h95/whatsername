import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { urlFor } from 'sanity';

const Product = ({
  slug,
  in_stock,
  images,
  name,
  available_in,
  price,
  sale_price
}) => {
  const [index, setIndex] = useState(0);
  return (
    <Link href={`/shop/products/${slug.current}`} key={slug}>
      <a
        className={`flex flex-col items-center justify-center group space-y-2 ${
          !in_stock && 'opacity-25'
        }`}
        onMouseEnter={() => (images[1] ? setIndex(1) : null)}
        onMouseLeave={() => setIndex(0)}
      >
        <div className="md:group-hover:scale-105">
          <Image
            src={urlFor(images[index])}
            alt={name}
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>{available_in}</p>
          <div className={`${!in_stock && 'text-red-500'}`}>
            {in_stock ? (
              sale_price ? (
                <div className="flex items-center space-x-2">
                  <p className="line-through opacity-60">£{price}</p>
                  <p>£{sale_price}</p>
                </div>
              ) : (
                `£${price}`
              )
            ) : (
              'Out of Stock'
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

const List = ({ products }) => (
  <div className="flex flex-col items-center justify-center w-screen space-y-4 md:space-y-0 md:space-x-6 md:flex-row ">
    {products.map((product, i) => (
      <Product {...product} key={i} />
    ))}
  </div>
);

export default List;
