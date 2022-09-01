import React from 'react'
import Image1 from './images/image 1.png'
import Image2 from './images/image 2.png'
import Image3 from './images/image 3.png'
import Image4 from './images/image 4.png'

function CountingCard() {
  return (
    <div className=' p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 bg-[#FAFAFA] w-full h-[420px]'>
        {/* Card 1 */}
        <div className=' rounded-lg overflow-hidden shadow-slate-100 shadow-lg mt-[42px] mb-[42px] w-[270px] h-[270px] bg-[#F8FFFB] cursor-pointer hover:bg-white duration-700'>
            <img src={Image1} alt="" className=' mx-auto my-8 justify-center'/>
            <div className=' px-4 py-2'>
                <h2 className=' font-poppins text-[24px] font-medium'>1500+ Topics</h2>
                <p className=' font-poppins font-medium text-[16px] text-[#585859]'>Learn Anythings</p>
            </div>
        </div>
        {/* Card 2 */}
        <div className=' rounded-lg overflow-hidden shadow-slate-100 shadow-lg mt-[42px] mb-[42px] w-[270px] h-[270px] bg-[#F8FFFB] cursor-pointer hover:bg-white duration-700'>
            <img src={Image4} alt="" className=' mx-auto my-8 justify-center' />
            <div className=' px-4 py-1'>
                <h2 className='font-poppins text-[24px] font-medium'>1800+ Students</h2>
                <p className='font-poppins font-medium text-[16px] text-[#585859]'>Learn Anythings</p>
            </div>
        </div> 
        {/* Card 3 */}
        <div className=' rounded-lg overflow-hidden shadow-slate-100 shadow-lg mt-[42px] mb-[42px] w-[270px] h-[270px] bg-[#F8FFFB] cursor-pointer hover:bg-white duration-700'>
            <img src={Image2} alt="" className=' mx-auto my-8 justify-center' />
            <div className=' px-4 py-1'>
                <h2 className=' font-poppins text-[24px] font-medium'>9K+ Test Token</h2>
                <p className=' font-poppins font-medium text-[16px] text-[#585859]'>Learn Anythings</p>
            </div>
        </div>

        {/* Card 4 */}
        <div className=' rounded-lg overflow-hidden shadow-[#F8FFFB] shadow-lg mt-[42px] mb-[42px] w-[270px] h-[270px] cursor-pointer hover:bg-white duration-700'>
            <img src={Image3} alt="" className=' mx-auto my-8 justify-center' />
            <div className=' px-4 py-1'>
                <h2 className=' font-poppins text-[24px] font-medium'>2000+ Books</h2>
                <p className=' font-poppins font-medium text-[16px] text-[#585859]'>Learn Anythings</p>
            </div>
        </div>
    </div>
  )
}

export default CountingCard