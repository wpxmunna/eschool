import React from 'react'
import FristSecBanner from './bannerImg.png'

function FirstSection() {
  return (
    <section className=' bg-[#F0FFF0] w-full h-[576px] mt-20 content-center'>
        <div className=' grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            <div className=' mr-auto place-self-center lg:col-span-7'>
                <p className=' text-[#FD511A] font-poppins font-bold text-xl text-left px-[30px]'>Are you ready to Learn?</p>
                <h1 className=' text-black font-poppins font-extrabold text-[48px] text-left mt-4 px-[30px]'>Learn With fun <br /> on <span className=' text-[#21B573]'> any schedule </span></h1>
                <p className=' text-[16px] text-[#6C6B6B] font-poppins font-normal text-left mt-2 px-[30px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Varius blandit facilisis quam netus.</p>
                <button className=' flex justify-start bg-[#21B573] text-white text-xl py-2 px-6 rounded-full md:ml-8 hover:bg-[#3af3a0ef] duration-500 mt-6 font-poppins'>Get Started</button>
            </div>
            <div className=' hidden lg:mt-0 lg:col-span-5 lg:flex pr-8'>
                <img src={FristSecBanner} alt="" />
            </div>
        </div>

    </section>
  )
}

export default FirstSection