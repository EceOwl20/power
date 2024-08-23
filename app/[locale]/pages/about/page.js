import React from 'react'
import About from '../../components/About'
import Person from './components/Person'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex h-[120px] w-full bg-neutral-900'></div>
     <div className="flex flex-col lg:flex-row w-full">
     <About/>
     <Person/>
     </div>
    </div>
  )
}

export default page
