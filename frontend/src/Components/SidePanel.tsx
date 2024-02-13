import React from 'react'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {}

const SidePanel = (props: Props) => {
  return (
    <div className='flex h-[100vh] w-[300px] bg-white flex-col border-r-[1px] border-lightGray py-6 px-4'>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-6
                        hover:rounded-md transition-[0.5s] font-mulish font-bold text-lightRed text-[26px] cursor-pointer'>
            <FontAwesomeIcon icon={faHome} className='text-[20px]'/>
            <p className='ml-4'>Home</p>
        </div>
    </div>
  )
}

export default SidePanel;