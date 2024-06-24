import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg';

const Header = () => {
  return (
    <div className='flex items-center w-full justify-between p-5 shadow-sm'>
        <div className=''>
          <Image src={logo} alt='logo' className='w-[150px] md:w-[200px]'/>
        </div>
        <ul className='hidden md:flex gap-14 font-medium text-lg'>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>Product</li>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>Pricing</li>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>Contact Us</li>
          <li className='transition-all duration-300 cursor-pointer hover:text-primary'>About Us</li>
        </ul>
        <div className='flex gap-5'>
          <Button variant='ghost' className=''>
            Log in
          </Button>
          <Button variant='outline' className=''>
            Get Started
          </Button>

        </div>
    </div>
  )
}

export default Header