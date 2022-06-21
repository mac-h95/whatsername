const Details = ({name, available_in, description}) => (
 <>
  <h1 className="text-2xl font-bold">{name}</h1>
  <p>{available_in}</p>
  <BodyText value={description} />
 </>
)

const Options = ({ options }) => (
  {options.map((option) => (
    <div key={option.name}>
      <label className="block text-sm font-bold">{option.name}</label>
      {option.values[0] === 'custom' ? (
        <input type="text" />
        ) : (
          <select className="w-full">
          {option.values.map((value) => (
            <option key={value}>{value}</option>
            ))}
        </select>
      )}
    </div>
  ))}
  );

  const Price = ({ price, sale_price, price }) => (
    <p className={`${!in_stock && 'text-red-500'}`}>
      {in_stock ? (sale_price ? sale_price : price) : 'Out of Stock'}
    </p>
  );

const DetailsPane = ({ name, available_in, description, options, price, sale_price, in_stock }) => (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Details name={name} available_in={available_in} description={description} />
      <Option options={options} />
      <Price price={price} sale_price={sale_price} in_stock={in_stock} />
    </div>
)