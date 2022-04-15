import React from 'react'
import { useNavigate } from 'react-router-dom'
import annsim from '../img/annsim.JPEG'
function ShowProject() {
    const navigate = useNavigate();

    return (
        <div className='w-screen h-screen bg-green-100 flex flex-col items-center justify-center px-5 py-5'>
            <div className='bg-white text-gray-600 text-sm rounded-3xl shadow-2xl overflow-hidden w-4/5 h-4/5 p-5'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-2xl font-semibold'>Project<span className='text-4xl text-blue-600'>.</span></h1>
                    <div className='flex flex-row gap-10 font-semibold tracking-wider text-gray-400 text-md'>
                        <h1 className='text-black'>Project</h1>
                        <h1>Experience</h1>
                        <h1>Skill</h1>
                        <h1>Contact</h1>
                    </div>
                    <button className="hover:text-red-500 focus:outline-none text-center leading-none" >
                        <i className="mdi mdi-close-box text-2xl" onClick={()=>navigate('/')}></i>
                    </button>
                </div>
                <div className="flex flex-col mt-5">
                    Annsim Project - 청소년 쉼터 프로젝트
                    <div className='w-2/5 mt-7'>
                    <img src={annsim} alt=''/>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProject