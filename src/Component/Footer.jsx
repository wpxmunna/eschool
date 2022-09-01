import React from 'react'
import Logo from './logo.png'

function Footer() {
  return (
    <footer className=' p-4 bg-[#1F1B24] shadow md:px-6 md:py-8 dark:bg-[#1F1B24]'>
        <div className=' sm:flex sm:items-center sm:justify-between'>
            <div className=' flex items-center mb-4 sm:mb-0 cursor-pointer pl-10'>
                <img src={Logo} alt="" className=' mr-3 h-10'/>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
            <li>
                <span className="mr-4 hover:underline md:mr-6 cursor-pointer">About</span>
            </li>
            <li>
                <span className="mr-4 hover:underline md:mr-6 cursor-pointer">Privacy Policy</span>
            </li>
            <li>
                <span className="mr-4 hover:underline md:mr-6 cursor-pointer">Licensing</span>
            </li>
            <li>
                <span className="mr-4 hover:underline md:mr-6 cursor-pointer">Contact</span>
            </li>
        </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://github.com/wpxmunna" class="hover:underline">WPX MUNNA</a>. All Rights Reserved.
        </span>

    </footer>
  )
}

export default Footer