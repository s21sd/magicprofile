import React, { useState } from 'react'
import profile from '../img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import Data from './Data';
import Apicall from './Apicall';
const Settings = () => {
    const [leetCode, setLeetCode] = useState();
    const getProfiles = () => {
        // console.log(leetCode);
    }
    return (
        <div className="  body-font bg-gradient-to-r from-green-500 via-green-300 to-green-200">
            <div className="container px-5">
                <div className="flex flex-col text-center w-full mb-12">
                </div>
                <div>
                    <div class="container" >
                        <div className="row" >
                            <div className="col-lg-8 col-md-8  col-xs-12">
                                <div className="panel panel-default plain profile-panel">
                                    <div className="panel-body">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="profile-avatar">
                                                <img className="img-responsive w-[10%] rounded-full" src={profile} alt="profilepicture" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12">
                                            <div className="user-name font-bold">
                                                Sunny Srivastava
                                            </div>
                                            <div className="user-information">
                                                <p>Creating awesome snippet for bootdey, bootdey is a gellery of free bootstrap snippets bootdeys</p>
                                            </div>
                                            <div className="profile-stats-info cursor-pointer">
                                                <p className='flex gap-1 items-center'><FontAwesomeIcon icon={faInstagram} style={{ color: '#da4453-#89216b' }} /><strong>insta</strong></p>
                                                <p className='flex gap-1 items-center'><FontAwesomeIcon icon={faGithub} /> <strong>github</strong></p>
                                                <p className='flex gap-1 items-center'><FontAwesomeIcon icon={faUser} /> <strong>profile</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {
                        Data.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-wrap m-2">
                                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div className="h-full flex items-center p-4 rounded-lg">
                                            <img alt="team" className="w-6 h-6 bg-gray-100 object-cover object-center rounded-full mr-4" src={item.image} />
                                            <div className="flex-grow">
                                                <input onChange={(e) => setLeetCode(e.target.value)} className='bg-gray-200 p-2 rounded-xl border-none outline-none' type='text' placeholder='Enter your Profile url..' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )

                        })
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={getProfiles} className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Submit</span>
                    </button>
                </div>




            </div>
            <Apicall props={leetCode} />
        </div>
    )
}

export default Settings
// efd6017c282f3eede3b17e22f2e0b1e1427440e1
// https://leetcodestats.cyclic.app/sunnysrivastava258/