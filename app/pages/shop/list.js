import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Product = ({ slug, in_stock, images, name, available_in, price }) => (
  <Link href={`/shop/products/${slug.current}`}>
    <a
      className={`flex flex-col items-center justify-center space-y-2 ${
        !in_stock && 'opacity-25'
      }`}
    >
      <Image src={urlFor(images[0])} alt={name} width={300} height={300} />
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{available_in}</p>
        <p className={`${!in_stock && 'text-red-500'}`}>
          {in_stock ? price : 'Out of Stock'}
        </p>
      </div>
    </a>
  </Link>
);

const List = ({ products }) => (
  <div className="flex flex-col items-center justify-center w-screen space-x-6 md:flex-row ">
    {products.map((product) => (
      <Product {...product} key={product.slug} />
    ))}
  </div>
);

export default List;
