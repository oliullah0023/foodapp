import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className=' p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:px-20 xl:px-40'>
     {/* box */}
     <div className=' h-full flex flex-col md:flex-row gap-4 items-center justify-center'>
      {/* image container */}
      <div className=' relative w-full h-1/3 md:w-1/2 max-w-[350px]'>
        <Image src='/offerBg.png' alt='' fill />
      </div>
      {/* form container */}
      <div className=' flex flex-col gap-4 max-w-[350px] '>
          <h1 className=' text-xl font-semibold'>Welcome</h1>
          <p>Log into your account or create a new one using socials buttons</p>
          <div className=' flex gap-2 ring-1 p-2'>
            <Image src='/google.png' alt='' width={20} height={20} />
            <p>Sign in with Google</p>
          </div>
          <div className=' flex gap-2 ring-1 p-2'>
            <Image src='/facebook.png' alt='' width={20} height={20} />
            <p>Sign in with Google</p>
          </div>
          <p>Have a problem? <Link href='/' className=' underline'>Contact us</Link></p>
      </div>
     </div>
    </div>
  )
}

export default LoginPage
