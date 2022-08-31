import React from 'react'
import CardPic1 from './images/Rectangle 6.png'
import CardPic2 from './images/Rectangle 13.png'
import CardPic3 from './images/Rectangle 15.png'

function CourseCard() {
  return (
    <div className=' w-full pt-20 bg-[#FAFAFA]'>
        <h1 className=' font-poppins font-bold text-[36px] text-center text-[#413960]'>Online Courses</h1>
        <div className=' w-full h-screen flex justify-center items-center bg-[#FAFAFA] py-[100px] p-12'>
            <div className=' grid grid-cols-3 gap-3 justify-center items-center px-4'>
                {/* Course Card 1 */}
                <div className=' w-[370px] h-[480px] shadow-2xl rounded-2xl shadow-slate-300 bg-white p-4'>
                    <img src={CardPic1} alt="" />
                    <h1 className=' font-poppins font-medium text-start text-[#413960] text-[24px] pt-4'>Modern Psychology</h1>
                    <p className=' font-poppins font-normal text-[16px] text-[#585859] pt-2 text-start'>Designation</p>
                    <button className=' bg-[#21B573] text-white text-xl py-2 px-6 rounded-full hover:bg-[#3af3a0ef] duration-500 mt-6 flex justify-start items-start'>Buy Course</button>
                    <div className=' mt-8 flex justify-between pb-5'>
                        <p className=' inline text-start font-poppins font-medium text-[16px] text-[#585859] rounded-full bg-slate-200 px-3 py-1'>#Start 20 April, 2022</p>
                        <p className=' inline text-end font-poppins font-medium text-[16px] text-[#585859] rounded-full bg-slate-200 px-3 py-1'>#60 Seats</p>
                    </div>
                </div>
                {/* Course Card 2 */}
                <div className=' w-[370px] h-[480px] shadow-2xl rounded-2xl shadow-slate-300 bg-white p-4'>
                    <img src={CardPic2} alt="" />
                    <h1 className=' font-poppins font-medium text-start text-[#413960] text-[24px] pt-4'>Modern Psychology</h1>
                    <p className=' font-poppins font-normal text-[16px] text-[#585859] pt-2 text-start'>Designation</p>
                    <button className=' bg-[#21B573] text-white text-xl py-2 px-6 rounded-full hover:bg-[#3af3a0ef] duration-500 mt-6 flex justify-start items-start'>Buy Course</button>
                    <div className=' mt-8 flex justify-between pb-5'>
                        <p className=' inline text-start font-poppins font-medium text-[16px] text-[#585859] rounded-full bg-slate-200 px-3 py-1'>#Start 20 April, 2022</p>
                        <p className=' inline text-end font-poppins font-medium text-[16px] text-[#585859] rounded-full bg-slate-200 px-3 py-1'>#60 Seats</p>
                    </div>
                </div>
                {/* Course Card 3 */}
                <div className=' w-[370px] h-[480px] shadow-2xl rounded-2xl shadow-slate-300 bg-white p-4'>
                    <img src={CardPic3} alt="" />
                    <h1 className=' font-poppins font-medium text-start text-[#413960] text-[24px] pt-4'>Modern Psychology</h1>
                    <p className=' font-poppins font-normal text-[16px] text-[#585859] pt-2 text-start'>Designation</p>
                    <button className=' bg-[#21B573] text-white text-xl py-2 px-6 rounded-full hover:bg-[#3af3a0ef] duration-500 mt-6 flex justify-start items-start'>Buy Course</button>
                    <div className=' mt-8 flex justify-between pb-5'>
                        <p className=' inline text-start font-poppins font-medium text-[16px] text-[#585859] rounded-full bg-slate-200 px-3 py-1'>#Start 20 April, 2022</p>
                        <p className=' inline text-end font-poppins font-medium text-[16px] text-[#585859] rounded-full bg-slate-200 px-3 py-1'>#60 Seats</p>
                    </div>
                </div>
            </div>

        </div>
    </div>    
  )
}

export default CourseCard