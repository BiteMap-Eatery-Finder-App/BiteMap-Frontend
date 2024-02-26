import React, { useEffect, useState } from 'react'
import { getById } from '../Endpoints';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Establishment } from '../Models/Establishment';

type Props = {}

const VisitEstablishmentPage : React.FC<Props> = (props: Props) : JSX.Element => {

    const {establishmentId} = useParams();
    const[establishment, setEstablishment] = useState<Establishment | any>();
    const [imagePath, setImagePath] = useState("");

    const fetchObject = async () => {
        axios.get(`${getById}${establishmentId}`)
        .then(response => {
            setEstablishment(response.data);
            console.log(establishment);
        }).catch(err => {
            console.log(err.response);
        })
    }

    useEffect(() => {
        fetchObject();
        const imageName = establishment?.name.replace(/\s+/g, '').toLowerCase();
        const imagesFolder = "";
        const validExtensions = [".jpg", ".jpeg", ".png"];
    
        for (const ext of validExtensions) {
          const imagePath = imagesFolder + imageName + ext;
    
          if (checkImageExists(imagePath)) {
            setImagePath(imagePath);
            break;
          }
        }
    }, [])


    /*useEffect(() => {
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
    }, [establishment.name]);*/
    
    const checkImageExists = (imagePath: string): boolean => {
        const img = new Image();
        img.src = imagePath;
        return img.complete || img.width + img.height > 0;
    };

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{        
      setTimeout(()=> {
          setLoading(false);
      })        
    },[]);
  
  
    if(isLoading){
      return ( 
        <section className="bg-white dark:bg-gray-900">
        </section>
        );
    }else
    return (
        <div className='flex flex-col w-full h-full px-10 py-6'>
            <img src={imagePath} className='w-full h-[400px] object-cover rounded-md'></img>
        </div>
    )
}

export default VisitEstablishmentPage