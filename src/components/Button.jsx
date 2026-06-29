import {useNavigate } from 'react-router-dom'

const Button = () => {

  const Navigate = useNavigate()

 
  
  return (
    <button onClick={() => Navigate('/Book')} className='bg-transparent w-50 md:scale-150 lg:scale-100 lg:w-50 md:top-20 h-12.5 font-semibold relative top-[2em] rounded-md cursor-pointer outline-1 outline-white text-white hover:bg-white hover:text-black'>Book a table</button>
  )
}

export default Button