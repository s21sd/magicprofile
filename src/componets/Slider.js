import React from 'react'
import SwiperCard from './SwiperCard';
import Data from './Data';
const Slider = () => {
    return (
        <div className='flex flex-wrap'>
            {
                Data.map((item, index) => {
                    return (
                        <div key={index}>

                            <SwiperCard props={item} />
                        </div>
                    )
                })
            }

        </div>

    )
}

export default Slider