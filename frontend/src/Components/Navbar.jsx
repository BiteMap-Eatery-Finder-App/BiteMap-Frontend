import { Link } from 'react-router-dom'
import logoNavBar from '../Assets/LogoNavBar.png'
import React, { useEffect, useState } from 'react';
import NotificationsButton from './NotificationsButton';
import { jwtDecode } from 'jwt-decode'
import ProfileButton from './ProfileButton';

const Navbar = (props) => {
  const { userLogged } = props;
  const [username, setUsername] = useState("");

  useEffect(() => {
    var token = localStorage.getItem('userToken');
    if(token != null){
      const user = jwtDecode(token);  
      const usernameClaim = user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      setUsername(usernameClaim);
    }
  }, [userLogged]);

  return (
    <div className='w-full h-[70px] bg-lightGray/10 flex flex-row justify-between py-4 px-10 justify-between items-center border-b-[1px] border-lightGray'>
      <Link to="/">
        <img src={logoNavBar} className='h-[40px] w-auto cursor-pointer'/>
      </Link>
      <div className='w-[220px] h-full flex flex-row justify-between items-center'>
        {userLogged ? 
          // <div className='w-[220px] h-full flex flex-row justify-end items-center'>
          //   <p className='font-mulish text-darkGray text-[20px] font-medium'>{username}</p>
          // </div>
          <div className='w-[220px] h-full flex flex-row justify-end items-center'>
            <NotificationsButton/>
            <ProfileButton/>
          </div>
         : 
          <div className='w-[220px] h-full flex flex-row justify-between items-center'>
            <Link to='/SignIn'>
              <button className='rounded-md text-[18px] font-mulish text-lightRed font-semibold hover:text-darkRed transitiion-[0.5s]'>
                Sign in
              </button>
            </Link>
            <Link to='/SignUp'>
              <button className='rounded-md w-[120px] font-mulish font-semibold text-lightRed border-[1px] cursor-pointer
                                    border-lightRed text-[18px] hover:text-white hover:bg-darkRed transition-[0.5s] h-[40px]'>
                Sign up
              </button>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar