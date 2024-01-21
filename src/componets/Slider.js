import React from 'react'
import SwiperCard from './SwiperCard';
import Data from './Data';
const Slider = () => {
    return (
        <div className='flex flex-wrap rounded-xl m-2'>
            {
                Data.map((item, index) => {
                    return (

                        <SwiperCard key={index} props={item} />

                    )
                })
            }

        </div>

    )
}

export default Slider