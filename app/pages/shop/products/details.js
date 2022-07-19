import { loadStripe } from '@stripe/stripe-js';
import NextHead from 'next/head';
import { urlFor } from 'sanity';

const Head = ({ name, description, category, image }) => (
  <NextHead>
    <title>{`${name} | Whatsername`}</title>
    <meta name="title" content={name} />
    <meta name="description" content={description}></meta>
    <meta name="keywords" content={category}></meta>
    <meta name="image" content={urlFor(image)}></meta>
    <meta name="og:title" content={name}></meta>
    <meta name="og:description" content={description}></meta>
    <meta name="og:keywords" content={category}></meta>
    <meta name="og:image" content={urlFor(image)}></meta>
  </NextHead>
);

const Details = ({ name, available_in, description }) => (
  <>
    <h1 className="mt-8 text-4xl font-bold">{name}</h1>
    <p className="font-bold">{available_in}</p>
    <p className="prose normal-case text-foreground-500">{description}</p>
  </>
);

const Options = ({ options, selectedOptions, setSelectedOptions }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm space-y-8 text-center ">
      {options.map((option) => (
        <div key={option.name}>
          <label className="block text-sm font-bold">{option.name}</label>
          {option.values[0] === 'custom' ? (
            <input
              type="text"
              className="w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:outline-0 border-foreground-500"
              onChange={(e) => {
                setSelectedOptions((previousState) => ({
                  ...previousState,
                  [option.name]: e.target.value
                }));
              }}
            />
          ) : (
            <select
              className="w-full bg-transparent border-0 border-b-2 focus:ring-0 focus:outline-0 border-foreground-500"
              onChange={(e) => {
                setSelectedOptions((previousState) => ({
                  ...previousState,
                  [option.name]: e.target.value
                }));
              }}
            >
              {option.values.map((value) => (
                <option
                  key={value}
                  className="w-full bg-transparent border-0 border-b-2 focus:ring-0 focus:outline-0 border-foreground-500"
                >
                  {value}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

const Quantity = ({ quantity, setQuantity }) => (
  <div className="flex items-center justify-center mx-auto space-x-4">
    <span
      onClick={() => setQuantity(quantity == 1 ? (quantity = 1) : quantity - 1)}
      className="quantity"
    >
      -
    </span>
    <span className="text-2xl">{quantity}</span>
    <span onClick={() => setQuantity(quantity + 1)} className="quantity">
      +
    </span>
  </div>
);

const Price = ({ price, sale_price, in_stock, quantity }) => (
  <p className={`text-4xl font-bold ${!in_stock && 'text-red-500'}`}>
    {in_stock ? (
      sale_price ? (
        <div className="flex items-center space-x-2">
          <p className="line-through opacity-60">£{price * quantity}</p>
          <div>£{sale_price * quantity}</div>
        </div>
      ) : (
        `£${price * quantity}`
      )
    ) : (
      'Out of Stock'
    )}
  </p>
);

const DetailsPanel = ({
  name,
  slug,
  available_in,
  description,
  options,
  image,
  price,
  selectedOptions,
  setSelectedOptions,
  category,
  sale_price,
  quantity,
  setQuantity,
  in_stock
}) => {
  const details = {
    slug: slug.current,
    name,
    quantity,
    options: selectedOptions,
    price: price,
    sale_price: sale_price,
    total_price: sale_price ? sale_price * quantity : price * quantity
  };

  const stripePromise = loadStripe(
    'pk_test_51LC0NQE61EXQFmDyWNXYF1ufvfp4JxNynFlx77zTaztuRTOkxqAyN3OZVRt9zNypaEZTrJyxKFqPrJY6STG4Fht200Go2kUpOQ'
  );

  const addItem = () => {};

  return (
    <div className="flex flex-col items-center justify-center max-w-sm space-y-6 text-center">
      <Head
        name={name}
        description={description}
        category={category}
        image={image}
      />
      <Details
        name={name}
        available_in={available_in}
        description={description}
      />
      <Options options={options} setSelectedOptions={setSelectedOptions} />
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <Price
        price={price}
        sale_price={sale_price}
        in_stock={in_stock}
        quantity={quantity}
      />
      <form action={() => addItem()}>
        <button
          disabled={in_stock ? false : true}
          className={`${
            !in_stock &&
            'opacity-10 hover:bg-primary-500 hover:opacity-10 hover:cursor-not-allowed'
          } cursor-pointer disabled:hover:opacity-60 disabled:hover:bg-primary-500 disabled:active:opacity-60 disabled:active:bg-primary-500 disabled:border-gray-200 bg-primary-500 hover:opacity-60 text-background-500 border-primary-500`}
        >
          Checkout Now
        </button>
      </form>
    </div>
  );
};

export default DetailsPanel;
