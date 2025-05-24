import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className='h-screen max-w-full p-2 border w-full flex items-center justify-center'>
      <Card className=''>
        <CardHeader>
            <CardTitle className='text-xl font-bold'>Create your Pop<span className="text-[#6C25FF]">X</span> account</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel ratione ut sed qui.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col py-6 gap-4 justify-between'>
            <div className='flex flex-col gap-6'>
                 <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='full-name'>Full Name<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter full name' className='border px-3 py-2  rounded-md placeholder:text-sm'/>
            </div>
            <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='phone-number'>Phone Number<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter your phone number' className='border px-3 py-2 rounded-md placeholder:text-sm'/>
            </div>
            <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='email-address'>Email Address<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter email address' className='border px-3 py-2 rounded-md placeholder:text-sm'/>
            </div>
            <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='password'>Password<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter password' className='border px-3 py-2 rounded-md placeholder:text-sm'/>
            </div>
            <div className='flex flex-col relative'>
                <label className='absolute -top-3 text-sm text-[#6C25FF] left-5 bg-white p-1' htmlFor='company-name'>Company Name<span className='text-red-600'>*</span></label>
                <input type='text' placeholder='Enter company name' className='border px-3 py-2 rounded-md placeholder:text-sm'/>
            </div>
            <div>
                <label htmlFor="question" className='text-sm'>Are you an Agency?<span className='text-red-600'>*</span></label>
                <div className='flex gap-4'>
                    <div className='flex gap-2 justify-center items-center'>
                         <input type="radio" className='accent-[#6C25FF]' name="question" id="" />
                         <label htmlFor="yes" className='text-sm'>Yes</label>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                         <input type="radio" className='accent-[#6C25FF]' name="question" id="no" />
                         <label htmlFor="no" className='text-sm'>No</label>
                    </div>
                </div>
            </div>
            </div>
           <Link href={'/profile'}> <Button className="w-full bg-[#6C25FF] hover:bg-purple-800">Create an account</Button></Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
