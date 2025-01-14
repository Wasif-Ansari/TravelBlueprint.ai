import React from 'react'
import { Link } from 'react-router-dom';


const PlaceCard = ({place}) => {
  return (
    <Link to={"https://www.google.com/maps/search/?api=1&query=" + place.geoCoordinates + ", " + place.placeName} target='_blank'>
    <div className='border-2 border-solid border-violet-600 rounded-xl p-3 flex gap-5 mt-3 hover:scale-105 transition-all hover:shadow-xl hover:border-4'>
        <img src="/Places.jpg" className='w-[300px] h-[200px] rounded-2xl'/>

        <div>
            <h2 className="font-medium text-lg text-orange-500">{place.time}</h2>
            <h2 className='text-2xl font-medium text-black dark:text-white'>{place.placeName}</h2>
            <p className='mt-3 text-gray-500'>{place.placeDetails}</p>
            <p className='mt-3 font-medium '>Tickets: {place.ticketPricing}</p>
            <p className='mt-3 font-medium text-black dark:text-white'>Ratings: ⭐{place.rating}</p>
        </div>
        
    </div>
    </Link>
  )
}

export default PlaceCard