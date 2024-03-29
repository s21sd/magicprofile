import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <div className='mt-4'>
            <header className="text-white body-font bg-[#010003]">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className='flex justify-between items-center gap-1 text-[40px]'>
                        <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '2em', marginTop: 2 }} icon={faLessThan} />
                        <h1 className="text-2lg font-bold">Magic</h1>
                        <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '2em', marginTop: 2 }} icon={faGreaterThan} />
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {/* <p className="mr-4 cursor-pointer  border-l-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]">Home</p> */}
                        {isLoggedIn ? <></> : <p className="mr-4 rounded-full p-3 cursor-pointer border-b-[1px] text-[32px] border-[#1BF0A2] hover:bg-[#c3f3e2] hover:text-black"><Link to="/login">Login</Link></p>}
                        {/* <p className="mr-4 cursor-pointer border-l-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]">About</p>
                        <p className="mr-4 cursor-pointer border-l-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]">Contact</p> */}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
