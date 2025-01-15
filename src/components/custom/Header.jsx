import React from 'react'
import { Button } from '../ui/button'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  console.log("User", user)

  return (
    <div className='flex justify-between items-center p-3 bg-violet-600'>
      <div className='flex flex-row gap-3 items-center px-2'>
        <img className='p-2 shadow-sm bg-white rounded-2xl w-13 h-12' src='/travel-svgrepo-com.svg' />
        <h2 className='text-white font-bold text-2xl'>TravelBlueprint.ai </h2>
      </div>

      <div className='flex flex-row gap-3 items-center'>
        {user ?
          <div className='flex items-center'>
            <img className='h-10 w-10 rounded-full mx-2' src={user?.picture} />
            <h2 className='text-white text-md font-bold'>{user?.name}</h2>
          </div>
          : <Button>Sign in</Button>
        }
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Header
