import React from 'react'
import { Link } from 'react-router-dom';

function ThankSection() {
    

    return (
        <>
            <div className='flex justify-center items-center h-[400px]'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    <img src="/images/icons/smile.png" className='h-[80px]' />
                    <h1 className='text-[60px] font-bold'>Thank You!</h1>
                    <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quidem.</p>
                    <button className='bg-[#FB704F] hover:bg-[#fa5b36] text-white uppercase text-[14px] font-medium py-3 px-5 w-[155px] cursor-pointer transition duration-300 '>
                    <Link to="/">Back to Home</Link>
                    </button>
                </div>
            </div>
        </>
    )
}
export default ThankSection;