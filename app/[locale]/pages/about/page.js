import React from 'react'
import About from '../../components/About'
import Person from './components/Person'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex h-[120px] w-full bg-neutral-900'></div>
     <About/>
     <Person/>
    </div>
  )
}

export default page
