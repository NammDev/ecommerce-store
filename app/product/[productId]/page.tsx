import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import ProductCard from '@/components/ui/product-card'

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId)
  const sugesstedProduct = await getProducts({
    categoryId: product?.category.id,
  })
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            {/* Galerry */}
            <div>Galerry</div>
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              {/* Info */}
              Info
            </div>
          </div>
          <hr className='my-10' />
          <ProductList items={sugesstedProduct} title='Suggested for you' />
        </div>
      </Container>
    </div>
  )
}

export default ProductPage
