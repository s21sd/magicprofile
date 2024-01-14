import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header className="text-white body-font bg-[#010003]">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className='flex justify-between items-center gap-1'>
                        <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1em', marginTop: 2 }} icon={faLessThan} />
                        <h1 className="text-lg font-bold">Magic</h1>
                        <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1em', marginTop: 2 }} icon={faGreaterThan} />
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {/* <p className="mr-4 cursor-pointer  border-l-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]">Home</p> */}
                        <p className="mr-4 cursor-pointer border-b-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]"><Link to="/login">Login</Link></p>
                        {/* <p className="mr-4 cursor-pointer border-l-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]">About</p>
                        <p className="mr-4 cursor-pointer border-l-[1px] p-[3px] border-[#1BF0A2] hover:text-[#1BF0A2]">Contact</p> */}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
