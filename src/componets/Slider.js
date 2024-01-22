import React from 'react'
import SwiperCard from './SwiperCard';
import Data from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ width: '600px', height: '270px' }}
        >
            <div className='flex rounded-xl'>
                {
                    Data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>

                                <SwiperCard props={item} />
                            </SwiperSlide>

                        )
                    })
                }

            </div>



        </Swiper>


    )
}

export default Slider