import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import sec from '../img/sec.png'
import Header from './Header';
const Second = () => {
    return (
        <div>
            <Header />
            <section className="text-white body-font bg-[#010003]">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-xl mb-2 text-[#1BF0A2]">Crafting Code with the Speed of

                        </h1>
                        <div className='flex justify-between items-center gap-1 mb-2'>
                            <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1em', marginTop: 2 }} icon={faLessThan} />
                            <h1 className="text-2xl font-bold text-white">Magic</h1>
                            <FontAwesomeIcon style={{ color: '#1BF0A2', fontSize: '1em', marginTop: 4 }} icon={faGreaterThan} />
                        </div>
                        <p class="mb-8 text-white">Automated Software Development Solutions – Swiftly Crafting Clean, Standardized, and Efficient Code</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-black bg-[#1BF0A2] border-0 py-2 px-6 focus:outline-none hover:bg-[#c3f3e2] rounded-sm text-lg"><Link to="/dashboard">Get Started</Link></button>
                            <button className="ml-4 inline-flex text-white  border-0 border-b-[1px] p-[3px] border-[#1BF0A2] py-2 px-6 focus:outline-none hover:bg-[#c3f3e2] rounded-sm text-lg"><Link to="/signup">Sign Up</Link></button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={sec} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Second