import { Button } from '@/components/ui/button'
import React from 'react'
import { FaShareAlt } from "react-icons/fa";


const InfoSection = ({ trip }) => {
    return (
        <>
            <div className='pt-3'>
                <img className='w-full h-[350px] object-cover rounded-md'
                    src={`/placeholder (${Math.floor(Math.random() * 5) + 1}).jpg`} />


            </div>
            <div className='flex justify-between items-center'>
                <div className='text-center p-3 mt-3 flex flex-col gap-3'>
                    <h2 className='text-4xl font-bold text-left my-3'>Your Trip to <span className='text-violet-700'>{" " + trip?.userSelection?.location?.label} </span> is ready...</h2>
                    <div className='flex gap-5 text-lg mt-3'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-base md:text-md'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-base md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-base md:text-md'>🧑‍🤝‍🧑 Number of Traveller: {trip?.userSelection?.people}</h2>
                    </div>
                </div>
                <Button><FaShareAlt />
                </Button>
            </div>
        </>
    )
}

export default InfoSection