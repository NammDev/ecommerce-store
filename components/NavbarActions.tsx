'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Plus, ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()
  const router = useRouter()

  if (!isMounted) return null

  return (
    <div className='flex items-center ml-auto gap-x-4'>
      <Button
        onClick={() => router.push('/cart')}
        className='flex items-center px-4 py-2 bg-black rounded-full'
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>{cart.items.length}</span>
      </Button>
    </div>
  )
}

export default NavbarActions
