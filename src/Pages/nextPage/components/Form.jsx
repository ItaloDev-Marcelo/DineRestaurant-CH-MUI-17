import { useForm } from "react-hook-form";
import { communData } from "../../../data/communData";
import { useState } from "react";

const Form = () => {
  const { Line, Plus, Minus } = communData;
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [howManyPeople, setHowManyPeople] = useState(1);
  const FormDataSubmit = () => {
    reset();
  };
  return (
    
    <form onSubmit={handleSubmit(FormDataSubmit)}>
      <div
        className="bg-white relative z-100 top-55 md:top-25 xl:top-10 xl:left-175 md:scale-110 shadow md:shadow-2xl
          w-85.5 md:w-112.5 xl:w-100 p-[2em] gap-y-4 h-auto  flex flex-col
          "
      >
        <div className="area-1 py-3">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              className={`border-b w-full  ${errors.name ? " border-b-[#B54949]" : "border-b-[#242B37]"}`}
              {...register("name", { required: true })}
              id="name"
              placeholder="Name"
            />
          </label>
          {errors.name && (
            <p className="text-[#B54949]">this fiel is required </p>
          )}
        </div>

        <div className="area-1 py-3">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              className={`border-b w-full  ${errors.email ? " border-b-[#B54949]" : "border-b-[#242B37]"}`}
              {...register("email", { required: true })}
              id="email"
              placeholder="Email"
            />
          </label>
          {errors.email ? (
            <p className="text-[#B54949]"> this fiel is required </p>
          ) : null}
        </div>
       
        <div className="flex flex-row justify-between my-2  " >

                    <div>
                          <label className='md:text-[1.3em]  xl:text-[1em]'>Pick a Date</label>
                    </div>

                    <div className="flex flex-row gap-2 text-center">
                         <div className='w-13  md:mx-3'>
                         <input type='number' name='mes'    className={`border-b w-full  ${errors.mes ? " border-b-[#B54949]" : "border-b-[#242B37]"}`}
                           {...register('mes', { required: true  })}  id='mes' placeholder='MM'/>
                         {errors.mes && <p className='text-[#B54949]'> this fiel is required </p>}
                         </div>

                         <div className='w-13 md:mx-3'>
                         <input type='number' name='day'  className={`border-b w-full  ${errors.day ? " border-b-[#B54949]" : "border-b-[#242B37]"}`}
                          {...register('day', { required: true  })} id='day' placeholder='DD'/>
                         {errors.day && <p className='text-[#B54949]'> this fiel is required</p>}
                         </div>


                         <div className='w-15 '>
                         <input type='number' name='year' className={`border-b w-full  ${errors.year ? " border-b-[#B54949]" : "border-b-[#242B37]"}`}
                          {...register('year', { required: true  })} id='year' placeholder='YYYY'/>
                         {errors.year && <p className='text-[#B54949]'> this fiel is required</p>}
                         </div>
        
                    </div>
                  
                     
         </div>

           <div className="flex flex-row justify-between my-2  " >

                    <div>
                          <label className='md:text-[1.3em] xl:text-[1em]'>Pick a time</label>
                    </div>

                    <div className="flex flex-row gap-2 text-center">
                         <div className='w-13  md:mx-3'>
                         <input type='number' name='hora'    className={`border-b w-full  ${errors.mes ? " border-b-[#B54949]" : "border-b-[#242B37]"}`}
                          {...register('hora', { required: true })}  maxLength='2'  id='hora' placeholder='09'/>
                         {errors.mes && <p className='text-[#B54949]'> this fiel is required </p>}
                         </div>

                         <div className='w-13 md:mx-3'>
                       

                             <input type='number' name='minuto'  {...register('minuto', { required: true  })}
                  className={`border-b w-full  ${errors.minuto ? " border-b-[#B54949]" : "border-b-[#242B37]"}`} maxLength='2' placeholder='00'  id='minuto'/>
                         {errors.minuto && <p className='text-[#B54949]'> this fiel is required</p>}
                         </div>


                         <div className='w-15 '>
                          <select  {...register('option', { required: true  })}>
                     <option value='AM' selected>AM</option>
                     <option value='PM' >PM</option>
                         <div className={`border-b-[#242B37] w-full ${errors.minuto && " border-b-[#B54949]"}`}></div>
                     {errors.option ? <p className='error'> this fiel is required </p> : null}
                         </select>
                         </div>
        
                    </div>
                  
                     
         </div>


         <div className={`border-b w-full flex flex-row justify-between px-2 pb-2`}>
                  <button type='button' onClick={() => setHowManyPeople(prev => prev - 1)}><img src={Minus} alt='icon' /></button>
                
                    <input type='text' name='display' className="bg-transparent font-bold text-center" {...register('display', { required: true  })}   disabled value={`${howManyPeople}  people`} />
              
                  <button type='button'  onClick={() => setHowManyPeople(prev => prev + 1)}><img src={Plus}  alt='icon'/></button>
         </div>



         <button type='submit'  className="bg-black w-full h-12.5 rounded-md cursor-pointer text-white font-semibold hover:border text hover:bg-white hover:text-black ">Make a Reservation</button>
      </div>
    </form>
  );
};

export default Form;
