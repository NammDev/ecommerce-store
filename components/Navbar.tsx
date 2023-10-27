import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './MainNav'
import getCategories from '@/actions/get-category'

export const revalidate = 0

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = async () => {
  const categories = await getCategories()
  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <Link className='ml-4 flex lg:ml-0 gap-x-2' href='/'>
            <p className='font-bold text-xl'>STORE</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
