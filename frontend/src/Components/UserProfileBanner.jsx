import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getUserByUsername } from '../Endpoints';
import { jwtDecode } from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faAt, faComment, faStar } from '@fortawesome/free-solid-svg-icons';

const UserProfileBanner = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState();

    function getUsernameFromToken() {
        const token2 = localStorage.getItem('userToken');
        const decoded = jwtDecode(token2);
        const usernameFromToken = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        setUsername(usernameFromToken);
    }
    
    const fetchUser = async () => {
        try {
            const response = await axios.get(`${getUserByUsername}${username}`);
            setUser(response.data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
    
    useEffect(() => {
        getUsernameFromToken();
    }, []);
    
    useEffect(() => {
        if (username !== "") {
            fetchUser();
        }
    }, [username]);

    return (
        <div className='flex flex-col h-full'>
            <div className='flex flex-col h-auto bg-cardWhite rounded-md shadow-sm'>
                <div className='flex flex-row w-full p-6 font-mulish'>
                    <img className="flex-shrink-0 object-cover w-[260px] h-[260px] rounded-xl border-[2px] border-lightGray" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <div className='flex flex-col w-full h-full ml-10 justify-between'>
                        {
                            user && (
                                <div className='flex flex-col h-full'>
                                    <p className='font-bold text-[32px] text-darkGray'>{user.firstName} {user.lastName}</p>
                                    <p className='font-light text-[20px] text-darkGray/50'>{user.username}</p>

                                    <div className='flex flex-row w-full mt-4'>
                                        <div className='flex flex-row items-center border-r-[1px] pr-4 border-lightGray'>
                                            <FontAwesomeIcon icon={faLocationPin} className='text-gray text-[20px]'/>
                                            <p className='font-mulish font-light text-[18px] text-gray ml-2'>Kraljevica Marka 53, Novi Sad Serbia</p>
                                        </div>
                                        <div className='flex flex-row items-center px-4 border-r-[1px] border-lightGray'>
                                            <FontAwesomeIcon icon={faPhone} className='text-gray text-[20px]'/>
                                            <p className='font-mulish font-light text-[18px] text-gray ml-2'>+381-644-3161-67</p>
                                        </div>
                                        <div className='flex flex-row items-center px-4 '>
                                            <FontAwesomeIcon icon={faAt} className='text-darkGray/70 text-[20px]'/>
                                            <p className='font-mulish font-light text-[18px] text-gray ml-2'>{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className='flex flex-row w-[700px] h-full justify-between mt-4'>
                            <div className='flex flex-col w-[200px] h-[120px] items-center justify-center rounded-md border-[1px] border-dashed border-gray'>
                                <div className='flex flex-row w-full items-center justify-center'>
                                    <FontAwesomeIcon icon={faComment} className='text-[26px] text-deepBlue'/>
                                    <p className='text-darkGray text-[24px] ml-2'>432</p>
                                </div>
                                <p className='font-medium text-gray text-[20px]'>Comments</p>
                            </div>
                            <div className='flex flex-col w-[200px] h-[120px] items-center justify-center rounded-md border-[1px] border-dashed border-gray'>
                                <div className='flex flex-row w-full items-center justify-center'>
                                    <FontAwesomeIcon icon={faStar} className='text-[26px] text-lightRed'/>
                                    <p className='text-darkGray text-[24px] ml-2'>511</p>
                                </div>
                                <p className='font-medium text-gray text-[20px]'>Reviews</p>
                            </div>
                            <div className='flex flex-col w-[200px] h-[120px] items-center justify-center rounded-md border-[1px] border-dashed border-gray'>
                                <div className='flex flex-row w-full items-center justify-center'>
                                    <FontAwesomeIcon icon={faStar} className='text-[26px] text-green'/>
                                    <p className='text-darkGray text-[24px] ml-2'>4.9</p>
                                </div>
                                <p className='font-medium text-gray text-[20px]'>Guest rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex overflow-x-auto overflow-y-hidden whitespace-nowrap font-mulish">
                    <button class="inline-flex items-center flex flex-row font-semibold items-center h-10 px-4 -mb-px text-sm text-center text-lightRed bg-transparent border-b-4 border-lightRred sm:text-base whitespace-nowrap focus:outline-none">
                        <p className='ml-2'>Profile</p>
                    </button>
                
                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-darkGray bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-lightRed">
                        <p className='ml-2'>Trips</p>
                    </button>
                
                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-darkGray bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-lightRed">
                        <p className='ml-2'>Photos</p>
                    </button>

                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-darkGray bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-lightRed">
                        <p className='ml-2'>Reviews</p>
                    </button>

                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-darkGray bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-lightRed">
                        <p className='ml-2'>Comments</p>
                    </button>

                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-darkGray bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-lightRed">
                        <p className='ml-2'>Saved</p>
                    </button>

                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-darkGray bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-lightRed">
                        <p className='ml-2'>Shared</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfileBanner