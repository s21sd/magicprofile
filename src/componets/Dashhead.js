import React, { useEffect, useState } from 'react'
import profile from '../img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from './Firebase';
const Dashhead = ({ onLogout }) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            console.log("sign out successfull ", auth);
            toast.success('sign out successful!');
            setTimeout(() => {
                onLogout(true);
            }, 3000)

        }).catch((error) => {
            console.log(error);
        });
    }


    return (

        <div className='flex justify-between m-4 h-fit w-[95%]'>

            <div>
                <h1 className='text-2lg font-bold text-[32px]'>Hello! Sunny</h1>
                <p className='text-[18px]'>{currentDate.toLocaleString()}</p>
            </div>
            <div className='bg-gray-200 w-fit p-3 h-fit flex justify-center items-center rounded-2xl gap-2'>
                <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '2em', marginLeft: '4' }} icon={faSearch} />
                <input className='bg-gray-200 ml-2 p-3 rounded-2xl' placeholder='Search' type='text' />
            </div>
            <div className='gap-3 flex justify-center items-center'>
                <div onClick={logout} className='bg-gray-200 w-fit h-fit p-[5px] rounded-lg cursor-pointer'>
                    <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faRightFromBracket} />
                </div>
                <div>
                    <img src={profile} width={50} height={50} alt='profile' />
                </div>
            </div>
            <div className='absolute'>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Dashhead
