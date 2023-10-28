import getBillboards from '@/actions/get-billboard'
import getProducts from '@/actions/get-product'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'

export const revalidate = 0

export default async function HomePage() {
  const billboard = await getBillboards('9c523497-e15f-4920-8676-36fa4057c192')
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title={'Featured Products'} items={products} />
      </div>
    </Container>
  )
}
