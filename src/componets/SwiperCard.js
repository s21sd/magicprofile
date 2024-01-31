import React from 'react';
import { useData } from "./Dataprovider";
const SwiperCard = ({ props }) => {
    const { data } = useData();

    return (
        <div className="text-gray-600 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl rounded-xl m-2" >

            <div className="p-4">
                <img
                    alt="avatar"
                    className="object-cover rounded-xl object-center w-[30px] mb-4"
                    src={props.image}
                />
                <div className="mt-5 text-[25px]">
                    <p className="text-gray-700 mb-2 font-bold flex">
                        Total Solved: <span className='font-sm ml-1'>
                            {data.totalSolved}
                        </span>/{data.totalQuestions}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Total Easy:<span className=' ml-1 font-sm text-green-500'>{data.easySolved}</span> /{data.totalEasy}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Total Medium:<span className=' ml-1 font-sm text-yellow-500'> {data.mediumSolved}</span>/{data.totalMedium}
                    </p>
                    <p className="text-gray-700 mb-2 flex font-bold">
                        Total Hard:<span className=' ml-1 font-sm text-red-500'>{data.hardSolved}</span>/{data.totalHard}
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
