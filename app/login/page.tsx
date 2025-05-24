import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='h-screen max-w-full p-2 border w-full flex items-center justify-center'>
      <Card className=''>
        <CardHeader>
            <CardTitle className='text-xl font-bold'>Sign in to Pop<span className="text-[#6C25FF]">X</span> account</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel ratione ut sed qui.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col py-6 gap-4 justify-between'>
            <div className='flex flex-col gap-6'>
            
            
            <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='email-address'>Email Address<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter email address' className='border px-3 py-2 rounded-md placeholder:text-sm'/>
            </div>
            <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='password'>Password<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter password' className='border px-3 py-2 rounded-md placeholder:text-sm'/>
            </div>
            
            </div>
           <Link href={'/profile'}> <Button className="w-full bg-[#6C25FF] hover:bg-purple-800">Login</Button></Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
