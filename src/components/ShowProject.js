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

                <div className='flex flex-row justify-between gap-10'>
                    <div className='flex flex-col w-1/2 gap-7'>
                        <div className="flex flex-col mt-5">
                            Annsim Project - 청소년 쉼터 프로젝트
                            <img src={annsim} alt='' className='mt-7'/>
                            <a href='http://ansim.ga' className='font-xl font-bold mt-5'>사이트 바로가기</a>
                        </div>  
                    </div>
                    <div className=' flex flex-col w-1/2 gap-7'>
                        <div className="flex flex-col mt-10">
                            <p className='font-bold text-xl'> Line 2 Project  <br/><br/>    
                                Ansim Project: 안심 프로젝트는 지하철 화장실에서나 겨우 볼 수 있는 <br/>
                                가출 청소년이나 미혼모와 같은 사회적
                                 약자를 보호 할 수 있는 시설을 쉽게<br/>
                                 검색하고 예약하는 서비스를 제공하고 보호시설 담당자와 보호시설에 입소하길 희망하는 사회적 약자들이 서로 소통 할 수 있는 보호 시설 맞춤형 
                                 예약 플랫폼을 제공하고자 한다.
                                 궁극적으로는 보호시설의 홍보를 돕고 쉽게 소통하고 예
                                약 함으로써 시설을 홍보하고 더 나아가 사회적 약자들을 위험으로 부터 보호 하고 자립을 돕는 서비스를 만드는 것이 목표이다.
                            </p>
                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShowProject