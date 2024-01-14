import React from 'react'
import profile from '../img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import gfg from '../img/gfg.png'
const Dashhead = () => {
    return (
        <div className='flex justify-between m-2 h-fit w-[95%]'>
            <div>
                <h1 className='font-bold text-sm'>Hello! Sunny</h1>
                <p className='text-[12px]'>4.45pm 14 jan 2024</p>
            </div>
            <div className='bg-gray-200 w-fit h-fit  rounded-sm gap-2'>
                <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1em', marginLeft: '4' }} icon={faSearch} />
                <input className='bg-gray-200 ml-2 p-1' placeholder='Search' type='text' />
            </div>
            <div className='flex gap-3'>
                <div className='bg-gray-200 w-fit h-fit p-[2px] rounded-full cursor-pointer'>
                    <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1rem' }} icon={faBell} />
                </div>
                <h1>Sunny</h1>
                <div>
                    <img src={profile} width={20} height={20} alt='profile' />
                </div>
            </div>
        </div>
    )
}

export default Dashhead
