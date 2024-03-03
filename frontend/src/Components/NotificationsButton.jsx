import React, { useState } from 'react'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotificationsButton = () => {
    return (
        <>
            <div className="relative min-h-screen py-6 flex flex-col justify-center sm:py-12 ml-2">
                <div className="flex items-center justify-center z-[10] font-mulish">
                    <div className=" relative inline-block text-left dropdown">
                        <button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-darkGray transition duration-150 ease-in-out rounded-md hover:text-lightRed focus:outline-none focus:bg-lightRed focus:text-white focus:shadow-outline-blue active:bg-lightGrayactive:text-lightGray" 
                                type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                            <FontAwesomeIcon icon={faBell} className='text-[20px]'/>
                        </button>
                        <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                            <div className="absolute z-[10] right-0 w-64 sm:w-80 mt-2 origin-top-right bg-white border border-lightGray divide-y divide-lightGray rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                <div className="py-2 w-full flex flex-col">
                                    <a href="#" className="flex items-center px-4 py-3 transition-colors duration-300 transform border-b border-lightGray hover:bg-lightGray dark:hover:bg-lightGray dark:border-lightGray">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                                        <p className="mx-2 text-sm text-darkGray dark:text-white"><span className="font-bold" href="#">Sara Salah</span> replied on the <span className="text-blue-500 hover:underline" href="#">Upload Image</span> artical . 2m</p>
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-3 transition-colors duration-300 transform border-b border-lightGray hover:bg-lightGray dark:hover:bg-lightGray dark:border-lightGray">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                                        <p className="mx-2 text-sm text-darkGray dark:text-white"><span className="font-bold" href="#">Slick Net</span> start following you . 45m</p>
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-3 transition-colors duration-300 transform border-b border-lightGray hover:bg-lightGray dark:hover:bg-lightGray dark:border-lightGray">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                                        <p className="mx-2 text-sm text-darkGray dark:text-white"><span className="font-bold" href="#">Jane Doe</span> Like Your reply on <span className="text-blue-500 hover:underline" href="#">Test with TDD</span> artical . 1h</p>
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-3 transition-colors duration-300 transform hover:bg-lightGray dark:hover:bg-lightGray">
                                        <img className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar" />
                                        <p className="mx-2 text-sm text-darkGray dark:text-white"><span className="font-bold" href="#">Abigail Bennett</span> start following you . 3h</p>
                                    </a>
                                </div>
                                <a href="#" className="block py-2 font-bold text-center text-white bg-darkGray dark:bg-lightGray hover:underline rounded-b-md">See all notifications</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationsButton