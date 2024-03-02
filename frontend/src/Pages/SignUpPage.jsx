import React from 'react'
import logotip from '../Assets/LogotipWhite.png'
import img from '../Assets/signupimage.jpg'

const SignUpPage = () => {
  return (
    <>
      <div className='flex w-full h-[80vh] items-center justify-center'>
        <div className='flex flex-row w-[1600px] h-[670px] bg-cardWhite rounded-md shadow-md'>
          <div className='flex w-[45%] h-full relative'>
            <img src={img} className='w-full h-full object-cover rounded-l-md'/>
            <div className='flex w-full h-full absolute items-center justify-center'>
              <img className="w-auto h-7 sm:h-80" src={logotip} alt=""/>
            </div>
          </div>
          <div className='flex flex-col w-[55%] p-10'>
            <div className='flex flex-col w-full'>
              <p className="text-3xl font-semibold tracking-wider text-darkGray capitalize dark:text-white">
                Get your free account now.
              </p>

              <p className="mt-4 text-darkGray/80 dark:text-gray-400 text-xl">
                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
              </p>
            </div>

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">First Name</label>
                <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Last name</label>
                <input type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Date Of Birth</label>
                <input type="text" placeholder="YYYY/MM/DD" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Phone number</label>
                <input type="email" placeholder="XX-XXXX-XXXX-XX" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Username</label>
                <input type="password" placeholder="john" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Email address</label>
                <input type="password" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Password</label>
                <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Confirm password</label>
                <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <button
                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white duration-300 transform bg-lightRed rounded-md hover:bg-darkRed focus:outline-none focus:ring focus:ring-lightRed focus:ring-opacity-50">
                <span>Sign Up </span>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage