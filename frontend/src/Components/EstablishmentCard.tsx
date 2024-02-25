import React, { useEffect, useState } from 'react'
import { Establishment } from '../Models/Establishment';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    Id : number,
    Name: string,
    Description: string,
    Type: number
}

const EstablishmentCard : React.FC<Establishment> = (establishment : Establishment) : JSX.Element => {

  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const imageName = establishment.name.replace(/\s+/g, '').toLowerCase();
    const imagesFolder = "";
    const validExtensions = [".jpg", ".jpeg", ".png"];

    for (const ext of validExtensions) {
      const imagePath = imagesFolder + imageName + ext;

      if (checkImageExists(imagePath)) {
        setImagePath(imagePath);
        break;
      }
    }
  }, [establishment.name]);

  const checkImageExists = (imagePath: string): boolean => {
    const img = new Image();
    img.src = imagePath;
    return img.complete || img.width + img.height > 0;
  };

  return (
    <div className='flex flex-col w-[450px] h-[350px] max-h-[350px] bg-cardWhite rounded-md shadow-md font-mulish justify-evenly relative'>
      <img src={imagePath} alt={establishment.name} className='w-full h-[150px] object-cover rounded-t-md mb-2'/>
      <div className='flex flex-row p-2 w-[70px] h-[30px] rounded-full bg-white absolute top-4 right-4 items-center justify-center'>
        <FontAwesomeIcon icon={faStar} className='text-yellow'/>
        <p className='font-bold text-yellow text-[20px] ml-[5px]'>5</p>
      </div>
      <div className='flex flex-col w-full h-full p-4 justify-between'>
        <div className='flex flex-col w-full justify-start'>
          <p className='font-bold text-darkGray text-[20px]'>{establishment.name}</p>
          <p className='font-light text-[16px] text-gray'>{establishment.description}</p>
        </div>
        <div className='flex w-full justify-end'>
          <button className='w-[150px] h-[35px] bg-lightRed rounded-md shadow-md text-white font-semibold text-[18px]
                            transition-[0.5s] hover:bg-darkRed'>
            Visit
          </button>
        </div>
      </div>
    </div>
  )
}

export default EstablishmentCard