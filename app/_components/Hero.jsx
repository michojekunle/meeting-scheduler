import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main className='flex flex-col items-center justify-center my-20 max-w-2xl'>
        <div className='text-center max-w-3xl mx-auto space-y-6'>
            <h2 className='font-bold text-[60px] text-slate-700 leading-tight'>Easy scheduling ahead</h2>
            <h2 className='text-xl text-slate-500'>Logoipsum is your scheduling automation platformfor eliminating the back and forth emails to find the perfect time --- and so much more.</h2>
            <div className='flex gap-4 flex-col mt-5'>
                <h2 className='text-sm'>Sign up free with google and facebook</h2>
                <div className='flex gap-5 items-center justify-center'>
                    <Button>Sign up with Google</Button>
                    <Button>Sign up with Facebook</Button>
                </div>
            </div>
            <hr className=''/>
            <h2 ><Link href='' className='text-primary'>Sign up free with email.</Link> No credit card required</h2>
        </div>

    </main>
  )
}

export default Hero