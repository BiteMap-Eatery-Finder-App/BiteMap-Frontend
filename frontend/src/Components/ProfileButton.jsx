import React, { useEffect, useState } from 'react'
import { faBell, faUser, faGear, faPhone, faFile, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';
import { getUserByUsername } from '../Endpoints';
import { Link } from 'react-router-dom';

const ProfileButton = () => {

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
        <>
            <div className="relative min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="flex items-center justify-center z-[10] font-mulish">
                    <div className=" relative inline-block text-left dropdown">
                        <button className="inline-flex font-mulish w-full items-center justify-center w-full pl-4 py-2 text-sm font-medium leading-5 text-darkGray transition duration-150 ease-in-out rounded-md" 
                                type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                            <div className='w-full flex flex-row items-center justify-evenly'>
                                <div className='rounded-full'>
                                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full border-[2px] border-lightGray" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar" />                            
                                </div>
                            </div>
                        </button>
                        <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                            <div className="absolute z-[10] right-0 w-64 sm:w-[330px] mt-2 origin-top-right bg-white border border-lightGray divide-y divide-lightGray rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                <div class="p-2 font-mulish text-darkGray flex-col">
                                    <div className='w-full flex flex-row items-center justify-between px-4 my-4'>
                                        <div className='w-[35px] h-[35px] rounded-full bg-darkGray'>
                                            <img className="flex-shrink-0 object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar" />               
                                        </div>
                                        <div className='flex flex-col text-left ml-2'>
                                            {
                                                user && (
                                                    <div>
                                                        <p className='text-[16px] font-semibold'>{user.username}</p>
                                                        <p className='text-[12px]'>{user.email}</p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <hr className='w-full text-lightGray my-2'></hr>
                                    <Link to="/profile">
                                        <div className='flex flex-row py-2 px-4 w-full h-[50px] hover:bg-lightGray transition-[0.5s] items-center my-1 cursor-pointer rounded-md' role="menuitem">
                                            <FontAwesomeIcon icon={faUser} className='text-[16px]'/>
                                            <p className='ml-2'>Profile</p>
                                        </div>
                                    </Link>
                                    <div className='flex flex-row py-2 px-4 w-full h-[50px] hover:bg-lightGray transition-[0.5s] items-center my-1 cursor-pointer rounded-md' role="menuitem">
                                        <FontAwesomeIcon icon={faGear} className='text-[16px]'/>
                                        <p className='ml-2'>Settings</p>
                                    </div>
                                    <div className='flex flex-row py-2 px-4 w-full h-[50px] hover:bg-lightGray transition-[0.5s] items-center my-1 cursor-pointer rounded-md' role="menuitem">
                                        <FontAwesomeIcon icon={faPhone} className='text-[16px]'/>
                                        <p className='ml-2'>Support</p>
                                    </div>
                                    <div className='flex flex-row py-2 px-4 w-full h-[50px] hover:bg-lightGray transition-[0.5s] items-center my-1 cursor-pointer rounded-md' role="menuitem">
                                        <FontAwesomeIcon icon={faFile} className='text-[16px]'/>
                                        <p className='ml-2'>Licence</p>
                                    </div>
                                    <hr className='w-full text-lightGray my-2'></hr>
                                    <button className='flex flex-row my-1 py-2 px-4 w-full h-[50px] rounded-md bg-darkGray hover:bg-lightRed transition-[0.5s] items-center' role="menuitem">
                                        <FontAwesomeIcon icon={faRightFromBracket} className='text-[16px] text-white'/>
                                        <p className='ml-2 text-white'>Sign Out</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileButton