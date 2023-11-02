'use client'
import { Product as ProductType } from '@/types'
import React, { MouseEventHandler } from 'react'
import Currency from './ui/currency'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/use-cart'

const Info = ({ data }: { data: ProductType }) => {
  const cart = useCart()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='items-end justify-between mt-3'>
        <div className='text-2xl text-gray-800'>
          <Currency value={data.price} />
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div
            className='w-8 h-4 border border-gray-600'
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className='flex items-center mt-10 gap-x-3'>
        <Button onClick={onAddToCart} className='flex items-center gap-x-2'>
          Add to Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}

export default Info
