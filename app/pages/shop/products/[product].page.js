import { useState } from 'react'
import sanity from 'sanity'
import Navigation from '../navigation'
import DetailsPanel from './details'
import ImagesPanel from './images'

export const getStaticPaths = async () => {
  const products = await sanity.fetch(`
  *[_type == "product" && !(_id in path("drafts.**"))]{
    slug{
      current
    }
  }
  `)

  return {
    paths: products.map(({ slug }) => ({
      params: { product: slug.current }
    })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await sanity.fetch(
    `
    *[slug.current == $product]{
      slug, name, description, category, images, in_stock, options[]->{name, values}, price, sale_price, available_in
    }
  `,
    { product: params.product }
  )
  const product = res[0]

  return {
    props: {
      product
    }
  }
}

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState([])

  return (
    <>
      {/* <Navigation /> */}
      <div className="flex flex-col-reverse items-center md:items-start justify-center space-y-4 md:space-x-4 md:flex-row">
        <DetailsPanel
          {...product}
          image={product.images[0]}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ImagesPanel images={product.images} />
      </div>
    </>
  )
}

export default Product
