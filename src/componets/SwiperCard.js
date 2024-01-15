import React from 'react';
const SwiperCard = ({ props }) => {
    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 w-full shadow-2xl rounded-xl">
                        <img alt="ecommerce" className="object-cover object-center w-[40px] md:w-10 h-10 md:h-auto mb-4" src={props.image} />
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">{props.name}</h3>
                            <h2 className="text-gray-900 title-font text-lg">{props.slogan}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperCard;
