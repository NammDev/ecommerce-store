import getBillboards from '@/actions/get-billboard'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/container'

export const revalidate = 0

export default async function HomePage() {
  const billboard = await getBillboards('9c523497-e15f-4920-8676-36fa4057c192')

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}
