import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
    const navigate = useNavigate();
    var i = 0;
        var txt = "Jeon's Portfolio";
        var speed = 50;

    const typeWriter=()=>{
            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

    return (
        <div className="select-none w-screen h-screen bg-green-100 flex flex-col items-center justify-center px-5 py-5">
            <div className='flex flex-col mb-5 font-bold text-green-900 text-3xl'>
            <button onClick={typeWriter} className='font-bold'>Click me</button>
            <p id="demo" className="cursor-pointer" ></p>



            </div>
            <div className="bg-gray-200 text-gray-400 text-sm rounded-lg shadow-2xl overflow-hidden p-5" >
                
                <div className="flex -mx-1">
                <div className="w-12 px-1 mb-4">
                    <button className="block w-full h-8 hover:text-red-500 focus:outline-none text-center leading-none" onClick={()=>navigate('/')}>
                    <i className="mdi mdi-camera text-2xl"></i>
                    </button>
                </div>
                <div className="flex-1 px-1 mb-4 relative">
                        <input type="text" className=" w-full h-8 px-3 bg-gray-100 border focus:outline-none rounded-full " placeholder="Come on.."/>
                    <button className="absolute z-10 top-0 right-0 mt-1 mr-2 block w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 text-white focus:outline-none text-center leading-none">
                    <i className="mdi mdi-navigation"></i>
                    </button>
                </div>
                </div>
                <div className="flex -mx-1 justify-center">
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">Q</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">W</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">E</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">R</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">T</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">Y</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">U</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">I</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">O</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 shadow focus:outline-none text-center leading-none" onClick={()=>navigate('/showproject')}>P</button>
                </div>
                </div>
                <div className="flex -mx-1 justify-center">
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">A</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-blue-500 text-white hover:bg-white hover:text-blue-500 shadow focus:outline-none text-center leading-none"
                    onClick={()=>navigate('/skill')}>S</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">D</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">F</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">G</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">H</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">J</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">K</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">L</button>
                </div>
                </div>
                <div className="flex -mx-1 justify-center">
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-800  text-white hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    <i className="mdi mdi-arrow-up-bold text-lg"></i>
                    </button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">Z</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">X</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-red-600 text-white hover:bg-white hover:text-red-600 shadow focus:outline-none text-center leading-none" onClick={()=>navigate('/contact')}>C</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">V</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-yellow-400 text-white hover:bg-white hover:text-yellow-400 shadow focus:outline-none text-center leading-none" onClick={()=>navigate('/back')}>B</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">N</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">M</button>
                </div>
                <div className="w-12 px-1 mb-2 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-800 text-white hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    <i className="mdi mdi-backspace-outline"></i>
                    </button> 
                </div>
                </div>
                <div className="flex -mx-1 shadow-xl">
                <div className="w-12 px-1">
                    <button className="block w-full h-10 rounded bg-gray-800 text-white hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    <i className="mdi mdi-numeric text-lg"></i>
                    </button>
                </div>
                <div className="w-12 px-1">
                    <button className="block w-full h-10 rounded bg-gray-800 text-white hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none">
                    <i className="mdi mdi-emoticon-happy-outline text-lg"></i>
                    </button>
                </div>
                <div className="flex-1 px-1 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-100 hover:bg-red-600 hover:text-white shadow focus:outline-none text-center leading-none text-xs">space</button>
                </div>
                <div className="w-20 px-1 shadow-xl">
                    <button className="block w-full h-10 rounded bg-gray-800 text-white hover:bg-red-600 hover:text-white shadow focus:outline-none leading-none text-xs">return</button>

                </div>

                </div>
            </div>

        </div>
  )
}

export default Home;