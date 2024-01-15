import React from 'react'
import Data from './Data'
import Recenttable from './Recenttable'
const Recentactivity = () => {
    return (
        <div>
            <h1 className='font-bold text-xl:'>Recent Activities</h1>
            {
                Data.map((item, index) => {
                    return (
                        <div key={index} className='border border-gray-200 m-2 rounded-2xl'>
                            <Recenttable props={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Recentactivity