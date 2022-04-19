import React from 'react'
import { useNavigate } from 'react-router-dom'
import jeon from '../img/jeon.jpg'

function Picture() {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center w-full h-screen px-5 bg-gray-800'>
        
        <div className='flex flex-col items-center justify-center gap-5 bg-gray-900 shadow-2xl h-124 w-80 rounded-3xl'>
            <div className='flex justify-end align-bottom'>
                <button className="text-white hover:text-red-500 focus:outline-none text-center leading-none ml-52 mt-2" >
                    <i className="mdi mdi-close-box text-2xl" onClick={()=>navigate('/')}></i>
                </button>
            </div>
            <div className='relative rounded-full h-52 w-52'>
                <img src={jeon} alt='my' className='rounded-2xl '/>
                <span className='absolute bg-green-500 border-gray-900 rounded-full top-64 right-6 h-4 w-4'>
                </span>
            </div>
            <div className='flex flex-col items-center gap-2 text-white'>
                <h1 className='text-3xl font-bold mt-14'>전창배</h1>
                <p className='text-xl tracking-widest text-gray-400'>developer</p>

            </div>
            
        </div>
    </div>
  )
}

export default Picture