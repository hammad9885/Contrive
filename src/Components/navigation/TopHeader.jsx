import React from 'react'

function TopHeader() {
    

    return (
        <>
            <div className='bg-[#2C5857] md:px-[90px] text-white'>
                <div className='container mx-auto flex justify-between py-[12px] text-[13px]'>
                <p className='flex flex-wrap'>Winter sale discount off <p className='text-[#F36E53]'> 60% </p> on all your orders!</p>
                <div className='flex'>
                    <select name="Language">
                        <option className='text-black' value="EN">EN</option>
                        <option className='text-black' value="ARB">ARB</option>
                        <option className='text-black' value="PK">PK</option>
                        <option className='text-black' value="IND">IND</option>
                    </select>
                    <select name="Country">
                        <option className='text-black' value="USD">USD</option>
                        <option className='text-black' value="EUR">EUR</option>
                        <option className='text-black' value="PK">PK</option>
                        <option className='text-black' value="IND">IND</option>
                    </select>
                </div>
                </div>
            </div>
        </>
    )
}
export default TopHeader;