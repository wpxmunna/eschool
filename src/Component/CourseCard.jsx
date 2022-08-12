import React from 'react'
import CardPic1 from './images/Rectangle 6.png'
import CardPic2 from './images/Rectangle 13.png'
import CardPic3 from './images/Rectangle 15.png'

function CourseCard() {
  return (
    <div className=' w-full h-screen flex justify-center bg-[#E5E5E5] py-[50px] p-12'>
        <div className=' grid grid-cols-3 gap-3 justify-center items-center px-4'>
            {/* Course Card 1 */}
            <div>
                <img src={CardPic1} alt="" />
            </div>
            {/* Course Card 2 */}
            <div>
                <img src={CardPic2} alt="" />
            </div>
            {/* Course Card 3 */}
            <div>
                <img src={CardPic3} alt="" />
            </div>
        </div>

    </div>
  )
}

export default CourseCard