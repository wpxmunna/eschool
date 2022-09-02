import React from 'react'
import Logo from '/media/ibrahim/Skills/Web Devlopment/eschool/src/Component/logo.png'

function SingIn() {
  return (
    <div className=' bg-[#F0FFF0]'>
        <div className=' flex flex-col items-center justify-center px-6 py-8 mt-12 mx-auto md:h-screen lg:py-0'>
            <img src= {Logo} alt="" className=' w-60 h-20 mr-2 flex items-center mb-6' />
            <div className=' w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
                <div className=' p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className=' text-xl font-bold leading-tight tracking-tight text-[#56548C] md:text-2xl text-start'>Sing in to your account</h1>
                    <form action="#" className=' space-y-4 md:space-y-6'>
                        <div>
                            <label htmlFor="email" className=' block mb-2 text-sm font-medium text-[#56548C] text-start'>Your E-mail</label>
                            <input type="email" name='email' id='email' className=' bg-gray-50 border border-[#56548C] text-[#56548C] sm:text-sm rounded-lg block w-full p-2.5 ' placeholder='name@company.com' />
                        </div>
                        <div>
                            <label htmlFor="password" className=' block mb-2 text-sm font-medium text-[#56548C] text-start'>Password</label>
                            <input type="password" name='password' id='password' className=' bg-gray-50 border border-[#56548C] text-[#56548C] sm:text-sm rounded-lg block w-full p-2.5 ' placeholder='••••••••••••••••' />
                        </div>
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-start'>
                                <div className=' flex items-center h-5'>
                                    <input type="checkbox" id='remember' className=' w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-4 focus:ring-[#56548C]' />
                                </div>
                                <div className=' ml-3 text-sm'>
                                    <label htmlFor="remember" className=' text-[#56548C]'>Remember me</label>
                                </div>
                            </div>
                            <span className=' text-sm font-medium text-[#21B573] cursor-pointer hover:underline'>Forgot password?</span>
                        </div>
                        <button type='submit' className=' w-full text-white text-lg px-5 py-2 font-bold bg-[#43b481] rounded-full hover:bg-[#21B573]'>Sing in</button>
                        <p className=' text-sm font-light text-gray-700'>Don't have an account yet?<span className=' cursor-pointer font-medium text-[#43B481] hover:underline'>Sing up</span></p>
                    </form>

                </div>
            </div>
        </div>

    </div>
  )
}

export default SingIn