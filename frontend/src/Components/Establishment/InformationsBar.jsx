import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faPhone, faLaptop, faClock, faPen, faShareAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const InformationsBar = () => {
  return (
    <>
        <div className='flex flex-row justify-between items-center bg-cardWhite rounded-md shadow-md px-4'>
            <div className='flex flex-row w-[75%] h-[30px]'>
                <div className='flex flex-row items-center border-r-[1px] pr-4 border-lightGray'>
                <FontAwesomeIcon icon={faLocationPin} className='text-darkGray text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>Kraljevica Marka 53, Novi Sad Serbia</p>
                </div>
                <div className='flex flex-row items-center px-4 border-r-[1px] border-lightGray'>
                <FontAwesomeIcon icon={faPhone} className='text-darkGray text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>+381-644-3161-67</p>
                </div>
                <div className='flex flex-row items-center px-4 border-r-[1px] border-lightGray'>
                <FontAwesomeIcon icon={faLaptop} className='text-darkGray text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>Visit website</p>
                </div>
                <div className='flex flex-row items-center px-4'>
                <FontAwesomeIcon icon={faClock} className='text-darkGray text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>
                    <span className='font-bold'>Open now:</span> 08:00 AM - 21:00 PM
                </p>
                </div>
            </div>
            <div className='flex flex-row w-[25%] h-[50px] items-center justify-end'>
                <div className='flex flex-row items-center pr-4 border-r-[1px] pr-2 border-lightGray text-darkGray hover:text-green transition-[0.5s] cursor-pointer'>
                <FontAwesomeIcon icon={faPen} className='text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] ml-2'>Review</p>
                </div>
                <div className='flex flex-row items-center px-4 px-2 border-r-[1px] border-lightGray text-darkGray hover:text-deepBlue transition-[0.5s] cursor-pointer'>
                <FontAwesomeIcon icon={faShareAlt} className='text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] ml-2'>Share</p>
                </div>
                <div className='flex flex-row items-center pl-4 text-darkGray hover:text-lightRed transition-[0.5s] cursor-pointer'>
                <FontAwesomeIcon icon={faHeart} className='text-[20px]'/>
                <p className='font-mulish font-medium text-[18px] ml-2'>Save</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default InformationsBar