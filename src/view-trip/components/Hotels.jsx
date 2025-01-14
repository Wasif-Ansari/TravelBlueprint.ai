import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Hotels = ({ trip }) => {

    // const HotelNames = trip?.tripData?.hotelOptions

    // console.log(text);
    return (
        <div>
            <h2 className='font-bold text-xl mt-5 mb-3'>Hotel Recommendations</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3 '>
                {trip?.tripData?.hotelOptions?.map((item, index) => (
                    <Link to={"https://www.google.com/maps/search/?api=1&query=" + item.hotelName + ", " + item.hotelAddress} target='_blank'>
                    <div className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-violet-600'>
                        <img className='rounded-xl ' src={"/hotel.jpg"} />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium'>{item?.hotelName}</h2>
                            <h2 className='text-sm text-gray-500 font-medium mt-1 text-balance'>📍{item?.hotelAddress}</h2>
                            <h2 className='text-sm mt-2 font-bold'>💵 {item?.price}</h2>
                            <h2 className='text-sm mt-2 font-bold '>⭐ {item?.rating}</h2>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Hotels