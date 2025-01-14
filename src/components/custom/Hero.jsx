import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-50 gap-10'>
        <h1 className='font-extrabold text-[60px] text-center mt-16'>Discover Your Next Adventure with AI:<br/>
            <span className='text-[#f56551]'>Personalized itineraries at Your Fingertips</span>
        </h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator creating custom itineraries tailored to your interests and budget.</p>

        <Link to={'/create-trip'} >
        <Button>Get Started, it's Free</Button></Link>
    
    </div>
  )
}

export default Hero