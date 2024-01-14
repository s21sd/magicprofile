import React from 'react'
import login from '../img/login.png'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='flex justify-center items-center '>
            <div class="flex justify-center items-center w-[70%] mb-6">

                <div class="bg-white w-[50%] px-4 
              flex items-center justify-center">

                    <div class="w-full h-100">
                        <h1 class="text-sm md:text-2xl font-bold leading-tight mt-12">Get Started Now</h1>

                        <form class="mt-6" action="#" method="POST">
                            <div>
                                <label class="block text-gray-700">Name</label>
                                <input type="text" placeholder="Enter Name" class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border  focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>
                            <div class="mt-4">
                                <label class="block text-gray-700">Email Address</label>
                                <input type="email" placeholder="Enter Email Address" class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border  focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div class="mt-4">
                                <label class="block text-gray-700">Password</label>
                                <input type="password" placeholder="Enter Password" minlength="6" class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border 
                      focus:bg-white focus:outline-none" required />
                            </div>

                            <button type="submit" class="w-full block bg-[#1BF0A2] focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-2 mt-3">Sign Up</button>
                        </form>



                        <button type="button" class="w-full flex justify-center items-center text-gray-900 font-semibold rounded-lg px-4 py-3 ">

                            <GoogleButton
                                onClick={() => { console.log('Google button clicked') }}
                            />

                        </button>

                        <p className='flex justify-end cursor-pointer font-bold underline text-blue-700'><Link to="/login">Signin</Link></p>


                    </div>
                </div>

                <div className='block'>
                    <img src={login} alt='mainimg' />

                </div>

            </div>

        </div>
    )
}

export default Signup