import React, { useEffect, useState } from 'react'
import { getById } from '../Endpoints';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Establishment } from '../Models/Establishment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNewspaper, faStar, faImage, faUtensils, faUsers } from '@fortawesome/free-solid-svg-icons';
import HomeSection from '../Components/Establishment/HomeSection';
import ReviewsSection from '../Components/Establishment/ReviewsSection';
import MenuSection from '../Components/Establishment/MenuSection';
import GalerySection from '../Components/Establishment/GalerySection';
import NewsSection from '../Components/Establishment/NewsSection';
import StaffSection from '../Components/Establishment/StaffSection';

const VisitEstablishmentPage = () => {
    const { establishmentId } = useParams();
    const [establishment, setEstablishment] = useState();
    const [establishmentName, setEstablishmentName] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [activeSection, setActiveSection] = useState("home");

    const fetchObject = async () => {
        const { data } = await axios.get(`${getById}${establishmentId}`);
        setEstablishment(data);
        setEstablishmentName(data.name);
        findImageUrl(data);
    }

    const findImageUrl = (establishmentData) => {
        const imageName = establishmentData.name.replace(/\s+/g, '').toLowerCase();
        const validExtensions = [".jpg", ".jpeg", ".png"];
        const imagesFolder = "/";

        for (const ext of validExtensions) {
            const imagePath = imagesFolder + imageName + ext;

            if (checkImageExists(imagePath)) {
                setImagePath(imagePath);
                break;
            }
        }
    }

    const checkImageExists = (imagePath) => {
        const img = new Image();
        img.src = imagePath;
        return img.complete || img.width + img.height > 0;
    };

    const handleSectionClick = (sectionName) => {
        setActiveSection(sectionName);
    };

    const renderSection = () => {
        switch (activeSection) {
            case "home":
                return <HomeSection />;
            case "reviews":
                return <ReviewsSection />;
            case "menu":
                return <MenuSection />;
            case "images":
                return <GalerySection />;
            case "news":
                return <NewsSection />;
            case "staff":
                return <StaffSection />;
            default:
                return null;
        }
    };

    useEffect(() => {
        fetchObject();
    }, [establishmentId])

    return (
        <div className='flex flex-col w-full h-full px-10 py-6 font-mulish'>
            <div className='flex relative justify-center'>
                <img src={imagePath} alt={establishment?.name} className='w-full h-[400px] object-cover rounded-md shadow-md' />
                <div className='flex absolute bottom-[-25px] items-center h-[60px] w-auto py-2 px-6 rounded-md bg-white shadow-lg'>
                    <p className='text-darkGray font-bold text-[42px]'>{establishment?.name}</p>
                </div>
            </div>
            <div className='flex flex-row w-full h-full justify-between mt-20 font-mulish'>
                <div className='flex flex-col w-[18%] h-auto bg-darkGray rounded-md shadow-md py-4'>
                    <div className='flex flex-col px-10 w-full h-[100px] justify-between'>
                        <p className='text-[16px] text-lightGray/50'>Need a table?</p>
                        <button className='w-full h-[40px] text-[18px] font-semibold text-white bg-lightRed rounded-md transition-[0.5s] hover:bg-darkRed'>
                            Reserve
                        </button>
                        <hr className='w-full text-lightGray/50'></hr>
                    </div>
                    <div className={`flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10 
                                    transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer mt-2 
                                    ${activeSection === "home" ? "bg-darkRed text-white" : ""}`} onClick={() => handleSectionClick("home")}>
                                        <FontAwesomeIcon icon={faHouse} className='text-[18px]'/>
                        <p className='ml-6'>Home</p>
                    </div>
                    <div className={`flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10 
                                    transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer mt-2 
                                    ${activeSection === "reviews" ? "bg-darkRed text-white" : ""}`} onClick={() => handleSectionClick("reviews")}>
                        <FontAwesomeIcon icon={faStar} className='text-[18px]' />
                        <p className='ml-6'>Reviews</p>
                    </div>
                    <div className={`flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10 
                                    transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer 
                                    ${activeSection === "menu" ? "bg-darkRed text-white" : ""}`} onClick={() => handleSectionClick("menu")}>
                        <FontAwesomeIcon icon={faUtensils} className='text-[18px]' />
                        <p className='ml-6'>Menu</p>
                    </div>
                    <div className={`flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10 
                                    transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer 
                                    ${activeSection === "images" ? "bg-darkRed text-white" : ""}`} onClick={() => handleSectionClick("images")}>
                        <FontAwesomeIcon icon={faImage} className='text-[18px]' />
                        <p className='ml-6'>Images</p>
                    </div>
                    <div className={`flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10 
                                    transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer 
                                    ${activeSection === "news" ? "bg-darkRed text-white" : ""}`} onClick={() => handleSectionClick("news")}>
                        <FontAwesomeIcon icon={faNewspaper} className='text-[18px]' />
                        <p className='ml-6'>News</p>
                    </div>
                    <div className={`flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10 
                                    transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer 
                                    ${activeSection === "staff" ? "bg-darkRed text-white" : ""}`} onClick={() => handleSectionClick("staff")}>
                        <FontAwesomeIcon icon={faUsers} className='text-[18px]' />
                        <p className='ml-6'>Staff</p>
                    </div>
                </div>
                <div className='w-[80%] h-auto flex flex-col'>
                    {renderSection()}
                </div>
            </div>
        </div>
    );
}

export default VisitEstablishmentPage;