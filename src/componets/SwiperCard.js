import React from 'react';
import { useData } from "./Dataprovider";

const SwiperCard = ({ props }) => {
    const { data } = useData();

    return (
        <div className="text-gray-600 w-[27%]  bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl rounded-xl m-2" >
             
            <div className="p-4">
                <img
                    alt="avatar"
                    className="object-cover object-center w-[40px] md:w-10 h-10 md:h-auto mb-4"
                    src={props.image}
                />
                <div className="mt-4 text-[12px]">
                    <p className="text-gray-700 mb-2 font-bold flex">
                        Total Solved: <p className='font-sm ml-1'>
                            {data.totalSolved}
                        </p>/{data.totalQuestions}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Total Easy:<p className=' ml-1 font-sm text-green-500'>{data.easySolved}</p> /{data.totalEasy}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Total Medium:<p className=' ml-1 font-sm text-yellow-500'> {data.mediumSolved}</p>/{data.totalMedium}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Total Hard:<p className=' ml-1 font-sm text-red-500'>{data.hardSolved}</p>/{data.totalHard}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Ranking: {data.ranking} | Contribution Points: {data.contributionPoints}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">Reputation: {data.reputation}</p>
                </div>

            </div>
        </div >
    );
};

export default SwiperCard;
