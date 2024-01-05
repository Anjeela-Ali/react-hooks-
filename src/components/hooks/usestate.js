import React from 'react';
import { useState } from 'react';

const UseStateHook = () => {

    const [color, setColor] = useState('red');
    // Single state that holds an object
    const defaultCarData = {
        car:'Safari',
        model:'Mustang',
        year:'1940',
        color:'Yellow'
    }

    
    const [car, setCar] = useState(defaultCarData);

    const updateColor = ()=>{
        setCar(
            previousState =>{
                return {...previousState, color:'blue'}
            }
        )
    }
    


    return (
        <>
            <div className='border-2 border-solid border-blue-300 m-4'>
                <h1 className='text-3xl font-bold underline py-5'>
                    This is my Favorite {color}
                </h1>
                <button onClick={() => setColor('Blue')} className='border-2 font-bold border-solid border-blue-500 py-2 px-[25px] rounded m-2 bg-[blue] text-white'>
                    Blue
                </button>
                <button onClick={() => setColor('Pink')} className='border-2 font-bold border-solid border-pink-200 py-2 px-[25px] rounded m-2 bg-[pink] text-white'>
                    Pink
                </button>
                <button onClick={() => setColor('Yellow')} className='border-2 font-bold border-solid border-yellow-300 py-2 px-[25px] rounded m-2 bg-[yellow] text-white'>
                    Yellow
                </button>
            </div>

            {/* Creating a single hook that holds multiple states as an object  */}

            <div className='border-2 border-solid border-blue-300 m-4'>
                <h1 className='text-3xl font-bold underline py-5'>
                    Car Brand
                </h1>
                <p >
                    It is a "{car.car}" model "{car.model}" year "{car.year}" "{car.color}"
                </p>
                <button onClick={updateColor} className='border-2 font-bold border-solid border-blue-300 py-2 px-[25px] rounded m-2 bg-blue-300 text-white'>
                    Change only Color                     
                </button>
                <button onClick={()=>setCar(defaultCarData)} className='border-2 font-bold border-solid border-yellow-300 py-2 px-[25px] rounded m-2 bg-[yellow] text-white'>
                    Change to default Color                     
                </button>
            </div>


            {/* What if we want to change only single property from the car state. */}




        </>
    )
}

export default UseStateHook
