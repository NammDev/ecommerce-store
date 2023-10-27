'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MainNavProps {
  data: {
    id: string
    name: string
  }[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className='mx-6 flex-center space-x-4 lg:space-x-6'>
      {routes.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
