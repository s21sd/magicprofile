import React from 'react'
import sidebarpng from '../img/sidebar.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTableColumns, faRightLeft, faBookmark, faGear, faAddressCard } from "@fortawesome/free-solid-svg-icons"
const Sidebar = () => {
    return (


        <div className='m-5 bg-white w-[35%] grid mt-12'>

            <div className='flex gap-2 items-center font-bold'>
                <FontAwesomeIcon icon={faUser} style={{ color: '#1BF0A2', fontSize: '2em', marginLeft: '4' }} />
                <h1 className='font-bold text-[20px]'>SUNNY</h1>
            </div>
            <hr className='w-20 mt-3 mb-5 border-l flex ml-1' />
            <div className='grid justify-between gap-10 text-[#76857e] text-sm cursor-pointer text-[30px]' >

                <div className='flex gap-3 items-center text-[#1BF0A2]'>
                    <FontAwesomeIcon style={{ color: '#1BF0A2' }} icon={faTableColumns} />
                    <h1>Dashboard</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faRightLeft} />
                    <h1>Exchage</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faBookmark} />
                    <h1>Liberary</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faAddressCard} />
                    <h1><Link to="/about">About</Link></h1>
                </div>

                <div className='flex gap-3 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faGear} />
                    <h1><Link to="/settings">Settings</Link></h1>
                </div>

            </div>
            <div className='mt-10'>
                <img className='h-[200px] w-[200px]' src={sidebarpng} alt='sidebar' />
            </div>
        </div>

    )
}

export default Sidebar
