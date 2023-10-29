import getProducts from '@/actions/get-products'

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const sugesstedProduct = await getProducts({})
  return (
    <div>
      <h1>{params.productId}</h1>
    </div>
  )
}

export default ProductPage
