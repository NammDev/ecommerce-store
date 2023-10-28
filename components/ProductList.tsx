import { Product as ProductType } from '../types'

type ProductListProps = {
  title: string
  items: ProductType[]
}

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
