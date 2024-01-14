
import React from 'react';
import Sidebar from './Sidebar';
import Dashhead from './Dashhead';
import Slider from './Slider';
import Graph from './Graph';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <div className="grid w-full">
          <Dashhead />
          <Slider />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
