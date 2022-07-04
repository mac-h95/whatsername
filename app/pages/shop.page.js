import Heading from 'heading'
import { shopPageFetch } from './shop/data'
import List from './shop/list'
import Navigation from './shop/navigation'

export const getStaticProps = async () => {
  const { heading, products } = await shopPageFetch()

  return {
    props: {
      heading,
      products
    }
  }
}

export const Shop = ({ heading, products }) => (
  <>
    <Heading heading={heading} />
    {/* <Navigation /> */}
    <List products={products} />
  </>
)

export default Shop
