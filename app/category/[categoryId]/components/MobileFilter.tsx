'use client'
import { Button } from '@/components/ui/button'
import IconButton from '@/components/ui/icon-button'
import { Color, Size } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import React, { Fragment, useState } from 'react'
import Filter from './Filter'

type MobileFilterProps = {
  sizes: Size[]
  colors: Color[]
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Button onClick={openModal} className='flex items-center gap-x-2 lg:hidden'>
        Filters <Plus size={20} />
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
                <div className='flex items-center justify-end px-4'>
                  <IconButton icon={<X size={15} />} onClick={closeModal} />
                </div>
                <div className='p-4'>
                  <Filter valueKey='sizeId' name='Sizes' data={sizes} />
                  <Filter valueKey='colorId' name='Colors' data={colors} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileFilter
