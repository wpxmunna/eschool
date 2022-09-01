import React from 'react'
import Logo from './logo.png'
import NavBtn from './NavBtn'

function Navbar() {
    let Links = [
        {name:"Home",link:"/"},
        {name:"Book",link:"/"},
        {name:"Course",link:"/"},
        {name:"Others",link:"/"},
        {name:"Blog",link:"/"},
    ]
  return (
    <div className=' shadow-md w-full fixed top-0 left-0'>
        <div className=' bg-[#F0FFF0] md:flex py-4 items-center justify-between md:px-10 px-7'>
            <div>
                <img className=' w-52 cursor-pointer px-[30px]' src={Logo} alt="" />
            </div>
            <ul className=' md:flex md:items-center'>
                {
                    Links.map((link)=>(
                        <li key={link.name} className=' md:ml-8 text-xl'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                }
                <NavBtn/>
            </ul>
        </div>
    </div>
  )
}

export default Navbar