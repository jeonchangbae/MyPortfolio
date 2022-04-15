import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Back.css'

function Back() {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center w-full h-screen bg-neutral-900'>
        <div className='bg-black border-2 rounded-3xl'>
            <div className='px-10 py-5 bg-white -rotate-6 w h-80 rounded-3xl'>
                <div className='flex justify-end w-full'> <button className="hover:text-red-500 focus:outline-none text-center leading-none" >
                        <i className="mdi mdi-close-box text-2xl" onClick={()=>navigate('/')}></i>
                    </button></div>
                    <div className='flex flex-row items-center justify-center gap-5'>
                        Worning
                    </div>
                    <h1 className='my-4 text-2xl font-semibold text-center'>Please Contact Me</h1>
                    <p>Come Back</p>
            
            </div>
        </div>

    </div>
  )
}

export default Back