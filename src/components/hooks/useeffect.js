import React from 'react';
import { useState, useEffect } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=>
            count+ 1
        )
    }, 1000)
}, [])
   
// useEffect(<fuction>, <depenency>)
    return (
        <>
            <div>
                <h1 className='text-3xl font-bold underline py-5'>
                    use of useEffect Hook.
                </h1>
                <h3>
                    Example of a timer.
                </h3>

                <h5>
                    I've render <p className='font-bold'>
                    </p> {count} times.
                </h5>


            </div>


        </>
    )
}

export default UseEffectHook
