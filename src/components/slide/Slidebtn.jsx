import React from 'react'

const Slidebtn = ({NextSlide, next}) => {
  return ( <button onClick={() => NextSlide(next)} className='cursor-pointer my-2 hover:text-gray-700 font-medium text-[1.5em]  xl:w-45'>{next}</button>
  )
}

export default Slidebtn