import React from 'react'
import UserProfileBanner from '../Components/UserProfileBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const UserProfilePage = () => {

    return (
        <div className='flex flex-col w-full h-auto bg-white relative'>
            <div className='flex w-full h-[300px] '>
                <button className='flex flex-row items-center justify-center w-full h-full border-none bg-darkGray/30'>
                    <FontAwesomeIcon icon={faImage} className='text-darkGray text-[24px]'/>
                    <p className='font-mulish font-light ml-4 text-[22px]'>Add cover photo</p>
                </button>
                <div className='flex flex-col w-full px-10 absolute top-[230px]'>
                    <UserProfileBanner/>
                </div>
            </div>
            <div className='flex flex-row w-[25%] mt-40'>
                <div className='flex w-full h-[400px] bg-cardWhite rounded-md shadow-sm'>

                </div>
            </div>
        </div>
    )
}

export default UserProfilePage