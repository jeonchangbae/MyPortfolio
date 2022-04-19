import React from 'react'
import { useNavigate } from 'react-router-dom';
import skill from '../img/skill.jpg'

function Skill() {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center w-full h-screen px-5 bg-gray-900'> 
        <div className='flex flex-col justify-between w-4/5 p-8 bg-gray-200 shadow-2xl rounded-lg h-4/5'>

            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-2xl font-semibold'>Skill<span className='text-4xl text-blue-600'>.</span></h1>
                <div className='flex flex-row gap-10 font-semibold tracking-wider text-gray-400 text-md'>
                    <h1 className='text-black'>Skill</h1>
                    <h1>Project</h1>
                    <h1>Experience</h1>
                    <h1>Contact</h1>
                </div>
                <button className="hover:text-red-500 focus:outline-none text-center leading-none" >
                        <i className="mdi mdi-close-box text-2xl" onClick={()=>navigate('/')}></i>
                    </button>
            </div>
            
            <div className='flex flex-row justify-between gap-5'>
                <div className='flex flex-col  gap-10'>
                    <button className='w-1/2 font-semibold bg-cyan-900 uppercase rounded-full text-white'>My skill</button>
                    <h1 className='text-5xl font-semibold'>Frontend <br/>Backend <br/> CICD <br/>AWS</h1>
                    
                </div>
                <div className='flex justify-center items-center w-4/5 h-4/5 mt-4'>
                    <img className='shadow-2xl rounded-2xl ' src={skill} alt='skill.jpg' />
                </div>  
            </div>
        </div>

    </div>
  )
}

export default Skill;