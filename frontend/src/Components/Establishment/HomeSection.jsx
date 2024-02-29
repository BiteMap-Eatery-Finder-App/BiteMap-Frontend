import React from 'react'
import { faStar, faUtensils, faBell, faWallet, faDroplet, faLocationPin, faLaptop, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Map from '../Map'

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
        <div className='flex flex-col w-[550px] h-[500px] min-h-[400px] max-h-auto bg-cardWhite rounded-md shadow-md p-6 justify-between'>
          <p className='font-bold text-[20px]'>Details</p>
          <div className='flex flex-col w-full'>
            <p className='text-[14px] font-bold mb-2'>ABOUT</p>
            <p>There were times every meal was like that. A good recipe. Fresh, local ingredients. Made with lots of love. The same is today. Inspired by our grandmothers' tried and tested recipes, we present to you a treasury of unforgettable traditional flavors. Enjoy!</p>
          </div>
          <hr className='w-full text-lightGray'></hr>
          <div className='flex flex-col w-full'>
            <p className='text-[14px] font-bold mb-2'>PRICE RANGE</p>
            <p>$4 - $54</p>
          </div>
          <hr className='w-full text-lightGray'></hr>
          <div className='flex flex-col w-full'>
            <p className='text-[14px] font-bold mb-2'>MEALS</p>
            <p>Breakfast, Lunch, Dinner, Brunch, Drinks</p>
          </div>
          <hr className='w-full text-lightGray'></hr>
          <div className='flex flex-col w-full'>
            <p className='text-[14px] font-bold mb-2'>FEATURES</p>
            <p>Delivery, Takeout, Reservations, Outdoor Seating, Seating, Parking Available, Validated Parking, Highchairs Available, Wheelchair Accessible, Serves Alcohol, Full Bar, Free Wifi, Accepts Credit Cards, Table Service, Dog Friendly, Family style</p>
          </div>
        </div>
        <div className='flex flex-col w-[450px] h-[400px] bg-cardWhite rounded-md shadow-md p-6 justify-between'>
          <p className='font-bold text-[20px]'>Location and contact</p>
          <Map width='full' height={150} shadow="" allowZoom={false} zoom={17}/>
          <div className='flex flex-col w-full h-[140px] justify-evenly'>
            <div className='flex flex-row items-center'>
              <FontAwesomeIcon icon={faLocationPin} className='text-darkGray text-[20px]'/>
              <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>Kraljevica Marka 53, Novi Sad Serbia</p>
            </div>
            <div className='flex flex-row w-full justify-between'>
              <div className='flex w-[50%]'>
                <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faLaptop} className='text-darkGray text-[20px]'/>
                  <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>Visit website</p>
                </div>
              </div>
              <div className='flex w-[50%]'>
                <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-darkGray text-[20px]'/>
                  <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>Send email</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center'>
              <FontAwesomeIcon icon={faPhone} className='text-darkGray text-[20px]'/>
              <p className='font-mulish font-medium text-[18px] text-darkGray ml-2'>+381-644-3161-67</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection