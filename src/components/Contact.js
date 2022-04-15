import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col justify-center m-6 '>
        <div className='inverse-toggle h-4/5 px-5 shadow-2xl text-gray-100 text-sm font-mono 
        subpixel-antialiased bg-gray-800 pt-4 rounded-lg leading-normal overflow-hidden'>
            <div className='mb-2 flex'>
                <div className='h-3 w-3 bg-red-500 rounded-full cursor-pointer' onClick={()=>navigate('/')}></div>
                <div className='ml-2 h-3 w-3 bg-orange-300 rounded-full'></div>
                <div className='ml-2 h-3 w-3 bg-green-500 rounded-full'></div>
                
            </div>
            
            <div className='mt-4 flex'>
                <span className='text-green-400'>computer:~$</span>
                <p className='flex-1 items-center pl-2'>sudo apt update <br/>
                </p>
            </div>
                <p className='flex-1 items-center pl-2 text-3xl mt-11'>
                    Jeon Changbae
                </p>
                <p className='flex-1 items-center pl-2 text-3xl'>
                    avantgard7@gmail.com
                </p>
                <p className='flex-1 items-center pl-2 text-3xl'>
                https://github.com/jeonchangbae
                </p>
        </div>
    </div>
  )
}

export default Contact