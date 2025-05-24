import { Camera } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='h-full max-w-full p-4'>
     <h1 className='text-xl mb-4'>Account Settings</h1>
     <hr />
     <div className='my-3 flex flex-col md:flex-row gap-5'>
        <div className='flex w-[100px] items-center gap-3 relative'>
            <Image src={'/my-photo.jpg'} className='rounded-full' alt='photo' width={100} height={100}/>
            <div className='bg-[#6C25FF] rounded-full absolute right-0 bottom-3'>
                <Camera color='white' className='p-1'/>
            </div>
        </div>
        <div>
            <div>
                <h5 className='font-semibold'>Sachin Uke</h5>
                <p className='text-gray-500'>sachinuke36@gmail.com</p>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, voluptatum rem omnis labore illo tenetur qui mollitia consectetur odio, dolorum exercitationem id officia blanditiis dignissimos.</p>
        </div>
     </div>
    </div>
  )
}

export default Profile
