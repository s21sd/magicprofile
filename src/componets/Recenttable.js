import React from 'react'

const Recenttable = ({ props }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center -m-2">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <img className='rounded-2xl' src={props.image} width={20} height={20} alt='profile' />
                    </div>
                    <div className="p-4">
                        <h2 className="title-font text-gray-900">{props.type}</h2>

                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font  text-gray-900">{props.time}</h2>

                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font text-gray-900">{props.question}</h2>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recenttable