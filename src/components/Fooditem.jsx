
const Fooditem = ({imageMobile, imageDesk,title,info,id}) => {
  return (
    <article className=' flex flex-col justify-center items-center md:my-10 xl:my-0 '>
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-baseline gap-5  w-150">
        <div className="my-7 xl:my-2 relative mr-5 ">
        <div className='w-2.5 h-0.5 hidden xl:block bg-red-500 opacity-30 absolute xl:top-3 xl:left-35'></div>
        <img src={imageMobile} alt="" className="xl:hidden w- md:w-93.75-auto relative z-10" />
        <img src={imageDesk} alt="" className='hidden xl:block w-35 relative z-10' />
      </div>
      <div className="w-90 md:-ml-10  xl:ml-0 xl:w-79 my-2 ">
        <h3 className="text-[1.3em] xl:text-[1.3em] md:text-4xl text-center my-2 xl:text-left">{title}</h3>
        <p className=" text-[1.2em] md:text-2xl xl:text-[1em] p-2 md:w-100 xl:w-57">{info}</p>
      </div>
      </div>
      <div className={`w-[62%] md:w-[95%] md:mt-10 xl:mt-0 xl:w-[82%] h-0.5  relative xl:left-0  bg-gray-600 opacity-35  ${id !== 3 ? 'block' : 'hidden'}`}></div>
    </article>
  );
};

export default Fooditem;
