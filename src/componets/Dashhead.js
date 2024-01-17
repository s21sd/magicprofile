import React from 'react'
import profile from '../img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from './Firebase';
const Dashhead = ({ onLogout }) => {
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

        <div className='flex justify-between m-2 h-fit w-[95%]'>

            <div>
                <h1 className='font-bold text-sm'>Hello! Sunny</h1>
                <p className='text-[12px]'>4.45pm 14 jan 2024</p>
            </div>
            <div className='bg-gray-200 w-fit h-fit  rounded-2xl gap-2'>
                <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1em', marginLeft: '4' }} icon={faSearch} />
                <input className='bg-gray-200 ml-2 p-1 rounded-2xl' placeholder='Search' type='text' />
            </div>
            <div className='flex gap-3'>
                <div onClick={logout} className='bg-gray-200 w-fit h-fit p-[4px] rounded-full cursor-pointer'>
                    <FontAwesomeIcon style={{ fontSize: '1rem' }} icon={faRightFromBracket} />
                </div>
                <h1>Sunny</h1>
                <div>
                    <img src={profile} width={20} height={20} alt='profile' />
                </div>
            </div>
            <div className='absolute'>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Dashhead
