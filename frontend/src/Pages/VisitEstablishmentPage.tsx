import React, { useEffect, useState } from 'react'
import { getById } from '../Endpoints';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Establishment } from '../Models/Establishment';

const VisitEstablishmentPage = () => {

    const {establishmentId} = useParams();
    const [establishment, setEstablishment] = useState<Establishment>();
    const [imagePath, setImagePath] = useState("");
    const [isLoading, setLoading] = useState(true);

    const fetchObject = async() => {
        /*axios.get(`${getById}${establishmentId}`)
        .then(response => {
            setEstablishment(response.data);
            console.log(establishment);
        }).catch(err => {
            console.log(err.response);
        });*/
        const {data} = await axios.get(`${getById}${establishmentId}`);
        setEstablishment(data);
    }

    const findImageUrl = () => {
        if(establishment){
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
        }
    }
    
    const checkImageExists = (imagePath: string): boolean => {
        const img = new Image();
        img.src = imagePath;
        return img.complete || img.width + img.height > 0;
    };

    useEffect(() => {
        fetchObject();
    }, [establishmentId]);

    useEffect(() => {
        if(establishment){
            findImageUrl();
        }
    }, [establishment]);

    useEffect(()=>{        
      setTimeout(()=> {
          setLoading(false);
      }, 1500)        
    },[]);
  
  
    if(isLoading){
        return ( 
            <section className="bg-white dark:bg-gray-900">
            </section>
        );
    }else
    return (
        <div className='flex flex-col w-full h-full px-10 py-6 font-mulish'>
            <div className='flex relative justify-center'>
                <img src={imagePath} className='w-full h-[400px] object-cover rounded-md'></img>
                <div className='flex absolute bottom-[-25px] items-center h-[60px] w-auto py-2 px-6 rounded-md bg-cardWhite'>
                    <p className='text-darkGray font-bold text-[42px]'>{establishment?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default VisitEstablishmentPage