import React from 'react'
import sidebarpng from '../img/sidebar.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTableColumns, faRightLeft, faBookmark, faCalendarDay, faGear } from "@fortawesome/free-solid-svg-icons"
const Sidebar = () => {
    return (


        <div className='m-4 bg-white w-[15%] grid '>

            <div className='flex gap-2 items-center font-bold'>
                <FontAwesomeIcon icon={faUser} />
                <h1>SUNNY</h1>
            </div>
            <hr className='w-16 mt-3 mb-5 border-l flex ml-1' />
            <div className='grid justify-between gap-3 text-[#76857e] text-sm cursor-pointer' >

                <div className='flex gap-2 items-center text-[#1BF0A2]'>
                    <FontAwesomeIcon style={{ color: '#1BF0A2' }} icon={faTableColumns} />
                    <h1>Dashboard</h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faRightLeft} />
                    <h1>Exchage</h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faBookmark} />
                    <h1>Liberary</h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faCalendarDay} />
                    <h1>Schedules</h1>
                </div>

                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon style={{ color: '#b4bdb9' }} icon={faGear} />
                    <h1><Link to="/settings">Settings</Link></h1>
                </div>

            </div>
            <div className='mt-10'>
                <img className='h-[100px]' src={sidebarpng} alt='sidebar' />
            </div>
        </div>

    )
}

export default Sidebar
