import React from 'react'

const About = () => {
    return (
        <div class="flex items-center m-5  xl:h-screen font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div class="flex flex-nowrap ">
                    <div class="w-[80%] px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt=""
                            class="relative z-40 object-cover w-full h-96 rounded-3xl" />
                    </div>
                    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <h2 class="mb-4 text-4xl font-semibold text-green-500 dark:text-gray-300">
                            About Us
                        </h2>
                        <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut

                        </p>
                        <a href="#"
                            className="px-4 py-3 text-green-700 transition-all transform border border-green-500 rounded-3xl hover:bg-green-600 dark:border-green-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-green-500 dark:text-green-400 hover:text-gray-100">
                            Discover more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About