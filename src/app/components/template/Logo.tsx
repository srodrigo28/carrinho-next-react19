import { IconBrandAmazon } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
      <Link href="/">
            <div className='flex flex-col items-center mt-2'>
                  <div className='text-xl leading-4 text-white'>A Z</div>
                  <IconBrandAmazon size={40} stroke={1} className='-mt-2 text-white' />
            </div>
      </Link>
  )
}