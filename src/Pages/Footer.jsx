
export default function Rodape()  {
    
  return (
    <footer className='p-4 py-10 xl:py-9  gap-10 bg-[#101010] text-white flex flex-col xl:flex-row text-center xl:text-justify xl:items-center xl:justify-between xl:px-20'>
   
      <div className='flex flex-row justify-center'>
        <p className='text-[4em] mt-10 xl:mt-0'>dine</p>
      </div>
      
      <div className='flex flex-col xl:flex-row my-1 xl:my-0'>
     
        <div>
           <p className='mb-[.2em]'>Marthwaite, Sedbergh</p>
         <p  className='mb-[.3em]'>Cumbria</p>
         <a href='tel:+00441234567'className='text-white no-underline'>00 44 123 4567</a>

        </div>
      </div>


      <div className='flex flex-col xl:flex-row'>
         <div className='m-[1em] xl:m-[1em 1.5em 0 5em]'>
            <p className='text-[.7em]'>Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
      </div>
      </div>

    </footer>
  )
}
