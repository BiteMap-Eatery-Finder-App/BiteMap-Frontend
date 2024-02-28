import React from 'react'
import { faStar, faUtensils, faBell, faWallet, faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeSection = () => {
  return (
    <>
      <div className='flex flex-row w-full h-auto justify-between font-mulish text-darkGray'>
        <div className='flex flex-col w-[450px] h-[400px] bg-cardWhite rounded-md shadow-md p-6 justify-between'>
          <p className='font-bold text-[20px]'>Ratings and reviews</p>
          <div className='flex flex-row w-full items-center'>
            <p className='text-[24px] font-extrabold'>4.5</p>
            <div className='ml-2 text-lightRed text-[18px] justify-between'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <p className='ml-2 font-bold'>233 reviews</p>
          </div>
          <div className='flex flex-col w-full'>
            <p><span className='font-bold'>#1</span> of 123 in Novi Sad</p>
            <p><span className='font-bold'>#12</span> of 1234 in Serbia</p>
          </div>
          <hr className='w-full text-lightGray'></hr>
          <div className='flex h-auto flex-col justify-between'>
            <p className='font-bold text-[14px] mb-4'>RATINGS</p>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faUtensils}/>
                <p className='text-[18px] ml-2'>Food</p>
              </div>
              <div className='text-lightRed text-[18px] justify-between'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
            </div>
            <div className='flex flex-row w-full justify-between items-center mt-2'>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faBell}/>
                <p className='text-[18px] ml-2'>Service</p>
              </div>
              <div className='text-lightRed text-[18px] justify-between'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
            </div>
            <div className='flex flex-row w-full justify-between items-center mt-2'>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faWallet}/>
                <p className='text-[18px] ml-2'>Value</p>
              </div>
              <div className='text-lightRed text-[18px] justify-between'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
            </div>
            <div className='flex flex-row w-full justify-between items-center mt-2'>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faDroplet}/>
                <p className='text-[18px] ml-2'>Hygiene</p>
              </div>
              <div className='text-lightRed text-[18px] justify-between'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[450px] h-[400px] bg-cardWhite rounded-md shadow-md p-6'>
          <p className='font-bold text-[20px]'>About</p>
        </div>
        <div className='flex flex-col w-[450px] h-[400px] bg-cardWhite rounded-md shadow-md p-6'>
          <p className='font-bold text-[20px]'>Location and contact</p>
        </div>
      </div>
    </>
  )
}

export default HomeSection