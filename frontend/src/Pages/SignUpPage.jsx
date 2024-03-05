import React, { useEffect } from 'react'
import logotip from '../Assets/LogotipWhite.png'
import img from '../Assets/signupimage.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signUp } from '../Endpoints'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SignUpPage = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DateOfBirthInput, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const SignUp = async () => {
    try {
      if(passwordsMatch){
        const DateOfBirth = new Date(DateOfBirthInput).toISOString();
        const response = await axios.post(signUp, {FirstName, LastName, Username, Password, Email, DateOfBirth});
  
        navigate('/');
        navigate(0);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  const ValidatePasswords = () => {
    if(Password !== repeatedPassword){
      console.log("Password does not match");
    } else {
      if(Password === "" && repeatedPassword === ""){
        console.log("Password does not match");
      }
      else {
        console.log("Password correct");
        setPasswordsMatch(true)
      }
    }
  }

  useEffect(() => {
    ValidatePasswords();
  }, [repeatedPassword]);

  return (
    <>
      <div className='flex w-full h-[80vh] items-center justify-center'>
        <div className='flex flex-row w-[1600px] h-[670px] bg-cardWhite rounded-md shadow-md'>
          <div className='flex w-[45%] h-full relative'>
            <img src={img} className='w-full h-full object-cover rounded-l-md'/>
            <div className='flex w-full h-full absolute items-center justify-center'>
              <img className="w-auto h-7 sm:h-80" src={logotip} alt=""/>
            </div>
          </div>
          <div className='flex flex-col w-[55%] p-10'>
            <div className='flex flex-col w-full'>
              <p className="text-3xl font-semibold tracking-wider text-darkGray capitalize dark:text-white">
                Get your free account now.
              </p>

              <p className="mt-4 text-darkGray/80 dark:text-gray-400 text-xl">
                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">First Name</label>
                <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 
                                                                bg-white border border-gray-200 rounded-md dark:placeholder-darkGray 
                                                                dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray 
                                                                focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed 
                                                                focus:outline-none focus:ring focus:ring-opacity-40" 
                          value={FirstName}
                          onChange={(e) => setFirstName(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Last name</label>
                <input type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 
                                                                bg-white border border-gray-200 rounded-md dark:placeholder-darkGray 
                                                                dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray 
                                                                focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed 
                                                                focus:outline-none focus:ring focus:ring-opacity-40" 
                          value={LastName}
                          onChange={(e) => setLastName(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Date Of Birth</label>
                <input type="date" placeholder="YYYY/MM/DD" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 
                                                                      bg-white border border-gray-200 rounded-md dark:placeholder-darkGray 
                                                                      dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray
                                                                      focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed 
                                                                      focus:outline-none focus:ring focus:ring-opacity-40" 
                        value={DateOfBirthInput}
                        onChange={(e) => setDateOfBirth(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Phone number</label>
                <input type="text" placeholder="XX-XXXX-XXXX-XX" className="block w-full px-5 py-3 mt-2 text-darkGray 
                                                                          placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-darkGray 
                                                                          dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray 
                                                                          focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed 
                                                                          focus:outline-none focus:ring focus:ring-opacity-40"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Username</label>
                <input type="text" placeholder="john" className="block w-full px-5 py-3 mt-2 text-darkGray placeholder-gray-400 
                                                                    bg-white border border-gray-200 rounded-md dark:placeholder-darkGray 
                                                                    dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray 
                                                                    focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed 
                                                                    focus:outline-none focus:ring focus:ring-opacity-40"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Email address</label>
                <input type="Email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-darkGray 
                                                                                    placeholder-gray-400 bg-white border border-gray-200 rounded-md 
                                                                                    dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 
                                                                                    dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed 
                                                                                    focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40" 
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Password</label>
                <input type="Password" placeholder="Enter your Password" className="block w-full px-5 py-3 mt-2 text-darkGray 
                                                                                    placeholder-gray-400 bg-white border border-gray-200 rounded-md 
                                                                                    dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 dark:border-darkGray 
                                                                                    focus:border-lightRed dark:focus:border-lightRed focus:ring-lightRed 
                                                                                    focus:outline-none focus:ring focus:ring-opacity-40"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-darkGray dark:text-gray-200">Confirm Password</label>
                <input type="Password" placeholder="Enter your Password" className="block w-full px-5 py-3 mt-2 text-darkGray 
                                                                                    placeholder-gray-400 bg-white border border-gray-200 rounded-md 
                                                                                    dark:placeholder-darkGray dark:bg-gray-900 dark:text-gray-300 
                                                                                    dark:border-darkGray focus:border-lightRed dark:focus:border-lightRed 
                                                                                    focus:ring-lightRed focus:outline-none focus:ring focus:ring-opacity-40"
                        value={repeatedPassword}
                        onChange={(e) => setRepeatedPassword(e.target.value)}/>
              </div>

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white duration-300 transform bg-lightRed rounded-md hover:bg-darkRed focus:outline-none focus:ring focus:ring-lightRed focus:ring-opacity-50"
                      onClick={SignUp}>
                Sign Up
                <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 rtl:-scale-x-100"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage