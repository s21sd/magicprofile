
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import Slider from './Slider';
import Graph from './Graph';
import { UserData } from './Datai';
import Recentactivity from './Recentactivity';
const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (



    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow">
        <div className="grid w-full">
          <Dashhead />
          <Slider />
        </div>
        <div style={{ width: 500 }} className='grid justify-center items-center'>
          <Graph chartData={userData} />
          <Recentactivity />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
