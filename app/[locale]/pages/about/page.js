import React from 'react'
import About from '../../components/About'
import Person from './components/Person'

const page = () => {
  return (
    <div className='flex flex-col gap-[100px] items-center justify-center'>
     <About/>
     <Person/>
    </div>
  )
}

export default page
