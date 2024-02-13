import React from 'react'
import { faBreadSlice, faBurger, faCake, faCalendarCheck, faCocktail, faCoffee, faHome, faHouse, faIceCream, faNewspaper, faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoNavBar from '../Assets/LogoNavBar.png'
import { Checkbox } from '@mui/material';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

type Props = {}

const SidePanel = (props: Props) => {
  return (
    <div className='flex h-[100vh] w-[320px] bg-darkGray flex-col border-r-[1px] border-lightGray py-6'>
        <div className='flex w-full h-[30px] flex-col px-10 transition-[0.5s] font-mulish font-medium text-lightGray/50 text-[18px]'>
            <p className=''>General</p>
            <hr className='text-lightGray/50 w-full mt-[5px]'/>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer mt-2'>
            <FontAwesomeIcon icon={faHouse} className='text-[18px]'/>
            <p className='ml-6'>Home</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer'>
            <FontAwesomeIcon icon={faStar} className='text-[18px]'/>
            <p className='ml-6'>Reviews</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer'>
            <FontAwesomeIcon icon={faCalendarCheck} className='text-[18px]'/>
            <p className='ml-6'>Reservations</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer'>
            <FontAwesomeIcon icon={faNewspaper} className='text-[18px]'/>
            <p className='ml-6'>News</p>
        </div>
        

        <div className='flex w-full h-[30px] flex-col px-10 transition-[0.5s] mt-6 font-mulish font-medium text-lightGray/50 text-[18px]'>
            <p className=''>Establishment types</p>
            <hr className='text-lightGray/50 w-full mt-[5px]'/>
        </div>
        <div className='flex w-full h-[50px] mt-2 flex-row justify-start items-center px-[30px] font-mulish font-medium text-white text-[20px]'>
            <Checkbox
                sx={{
                    color: '#F5F6FA',
                    '&.Mui-checked': {
                    color: '#a60d0d',
                    },
                }}
            />
            <FontAwesomeIcon icon={faCoffee} className='text-[18px]'/>
            <p className='ml-4'>Coffee & Tea</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center px-[30px] font-mulish font-medium text-white text-[20px]'>
            <Checkbox
                sx={{
                    color: '#F5F6FA',
                    '&.Mui-checked': {
                    color: '#a60d0d',
                    },
                }}
            />
            <FontAwesomeIcon icon={faCocktail} className='text-[18px]'/>
            <p className='ml-4'>Bars & Pubs</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center px-[30px] font-mulish font-medium text-white text-[20px]'>
            <Checkbox
                sx={{
                    color: '#F5F6FA',
                    '&.Mui-checked': {
                    color: '#a60d0d',
                    },
                }}
            />
            <FontAwesomeIcon icon={faUtensils} className='text-[18px]'/>
            <p className='ml-4'>Restaurants</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center px-[30px] font-mulish font-medium text-white text-[20px]'>
            <Checkbox
                sx={{
                    color: '#F5F6FA',
                    '&.Mui-checked': {
                    color: '#a60d0d',
                    },
                }}
            />
            <FontAwesomeIcon icon={faIceCream} className='text-[18px]'/>
            <p className='ml-4'>Dessert</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center px-[30px] font-mulish font-medium text-white text-[20px]'>
            <Checkbox
                sx={{
                    color: '#F5F6FA',
                    '&.Mui-checked': {
                    color: '#a60d0d',
                    },
                }}
            />
            <FontAwesomeIcon icon={faBreadSlice} className='text-[18px]'/>
            <p className='ml-4'>Bakeries</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center px-[30px] font-mulish font-medium text-white text-[20px]'>
            <Checkbox
                sx={{
                    color: '#F5F6FA',
                    '&.Mui-checked': {
                    color: '#a60d0d',
                    },
                }}
            />
            <FontAwesomeIcon icon={faBurger} className='text-[18px]'/>
            <p className='ml-4'>Quick Bites</p>
        </div>
    </div>
  )
}

export default SidePanel;