import React from 'react'
import Avatar from './images/Ellipse.png'

function Testimonial() {
  return (
    <div className=' w-full h-[400px] bg-[#E5E5E5] pt-5'>
        <h1 className=' font-poppins font-bold text-[36px] text-center text-[#413960]'>Testimonials</h1>
        <div className=' p-6 md:p-12 text-center md:text-left shadow-lg rounded-md'>
            <div className=' flex justify-center'>
                <div className=' max-w-3xl'>
                    <div className=' block p-6 rounded-lg shadow-lg bg-white m-4'>
                        <div className=' md:flex md:flex-row'>
                            <div className=' md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0'>
                                <img src={Avatar} alt="" className=' rounded-full shadow-md'/>
                            </div>
                            <div className=' md:ml-6'>
                                <p className=' text-gray-500 font-light mb-6'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure aliquam quidem non sunt. Laborum velit fugit eveniet, voluptas possimus vitae, hic sed, corrupti blanditiis exercitationem consequuntur et tempore!
                                </p>
                                <p className=' font-semibold text-xl mb-2 text-gray-800'>David Smith</p>
                                <p className=' font-semibold text-gray-500 mb-0'>CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial