import {useEffect, useState} from 'react'
import Footer  from '../Footer'
import { AppBar, Stack, Box, Typography, Button} from '@mui/material'
import Grid from '@mui/material/Grid2';
import ScrollReveal from "scrollreveal";
import Logo from '../../assets/images/logo.svg'
import Line from '../../assets/images/patterns/pattern-lines.svg';
import plus from '../../assets/images/icons/icon-plus.svg'
import minus from '../../assets/images/icons/icon-minus.svg'

import {useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
export default function bookYourTable()  {
  
const Navigate = useNavigate()
const {handleSubmit,register ,formState:{errors}, reset} = useForm();
const [howManyPeople, setHowManyPeople] = useState(1)

const FormDataSubmit = (data) => {
   console.log(data)
}

  useEffect(() => {
         ScrollReveal().reveal(".reveal", {
           distance: "20px",
           duration: 1000,
           easing: "ease-in-out",
           origin: "left",
           reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
         });
        }, []) 

        
  return (
    <>
    <Stack className='pt-1' component='Stack'>
        <Stack className='top-bg reveal'>
        <AppBar color='trasparent' position='static' sx={{display: {xs: 'none', md: 'block'}, boxShadow: 'none', paddingTop: '5em', paddingLeft: '10em'}} >
                  <img src={Logo} alt=''/>
         </AppBar>
        </Stack>
        
          <Box  sx={{color: 'white',maxWidth: {lg: '700px'}, padding: {xs: '4em'}, position: 'relative', top: {xs: '4em', sm: '1em',  lg: '1em'}, left: {lg: '5.5em'}, textAlign: {xs: 'center', lg: 'left'}}} className='reveal'>
                   <Typography component='p' margin='1em 0'  display={{xs: 'block', md: 'none'}}> <Typography component='strong' fontSize={{xs: '2em', sm: '3.5em'}}>dine</Typography>   </Typography>
                   <Typography component='h1' fontSize={{xs: '2em', sm: '4em', lg: '5em'}} padding={{xs: '0 1em',sm : '0 1em', lg: '0'}} marginBottom={{xs: '1em' ,lg: '0'}} lineHeight={{xs:'1.2em', lg: '1.3em'}}>Reservations</Typography>
                   <Typography component='p' maxWidth={{lg: '400px'}} margin='1em 0' padding={{sm: '0 13em', lg: '0'}} fontSize={{md: '1.3em'}} lineHeight={{xs: '1.5em', lg: '1.7em'}} >We can’t wait to host you. If you have any special requirements please feel free to 
                   call on the phone number below. We’ll be happy to accommodate you.</Typography>
                   <Button  onClick={() => Navigate('/DineHomePage')}   sx={{background: 'trasparent', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', outline: '1px solid white',color: '#fff', '&:hover': {background: 'white', color: '#000'}}}>Reserve Place</Button>
          </Box>
    </Stack>
    <Stack position='relative'>
    <Stack  maxWidth={{xs: '90%', md: '450px'}}  
     backgroundColor='#fff' position='relative' top={{xs:'-15em' , md: '-5em', lg: '-25em'}}
     left={{xs: '1.5em', md:'17.5em', lg: '50em'}} padding='2em' height={{xs:'auto'}}
      boxShadow='8px 8px 5px -6px rgba(0,0,0,0.41)' className='reveal form' zIndex='4'>
      
       
      <form onSubmit={handleSubmit}>
      <Grid container>
        
        <Grid size={12}  className='area-1' >
              <label htmlFor='name'>
              <input type='text' name='name'  {...register("name", { required: true  })}  id='name' placeholder='Name' /> 
               {errors.name ? <p>{errors.name}  </p> : null}
              </label>
              </Grid>
  
              <Grid  size={12}  className='area-1'>
              <label htmlFor='email'>
              <input type='email' name='email' {...register("email", { required:true  })} id='email' placeholder='Email' /> 
              {errors.email ? <p>{errors.email}  </p> : null}
              </label>
              </Grid>
  
  
              <Grid size={12}   display='flex' component='div' className='sub-area'  >
              
                 <Grid container  className='area-2' >
                 <Grid size={{xs: 12, md: 2}}>
                  <label>Pick a Date</label>
              </Grid>
                 <Grid size={{xs: 4, md: 4}}  padding={{xs: '0  2em 0  0', md:'0 2em' }}>
                 <input type='number' name='mes'  {...register("mes", { required: true  })}  id='mes' placeholder='MM'/>
                 {errors.mes ? <p>{errors.mes}  </p> : null}
                 </Grid>
                 <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 3em 0 1em' }}>
                 <input type='number' name='day'  {...register("day", { required: true  })} id='day' placeholder='DD'/>
                 {errors.day ? <p>{errors.day}  </p> : null}
                 </Grid>
                 <Grid size={{xs: 4, md: 2}} padding={{xs: '0 0 .5em 0', md:'0' }}>
                 <input type='number' name='year'  {...register("year", { required: true  })} id='year' placeholder='YYYY'/>
                 {errors.year ? <p>{errors.year}  </p> : null}
                 </Grid>
  
                   </Grid>
              </Grid>
  
              <Grid size={12}   display='flex' component='div' className='sub-area'  >
              
                 <Grid container  className='area-2' >
                 <Grid size={{xs: 12, md: 2}}>
                  <label>Pick a time</label>
              </Grid>
                 <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 2em' }}>
                 <input type='number' name='hora'  {...register("hora", { required: true })}  maxLength='2'  id='hora' placeholder='09'/>
                 {errors.hora ? <p>{errors.hora}  </p> : null}
                 </Grid>
                 <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 3em 0 1em' }}>
                 <input type='number' name='minuto'  {...register("minuto", { required: true  })}  maxLength='2' placeholder='00'  id='minuto'/>
                 {errors.minuto ? <p>{errors.minuto}  </p> : null}
                 </Grid>
                 <Grid size={{xs: 4, md: 2}} padding={{xs: '0 0 .5em 0', md:'0' }}>
                 <select  {...register("option", { required: true  })}>
                     <option value='AM' selected>AM</option>
                     <option value='PM' >PM</option>
                     {errors.option ? <p>{errors.option}  </p> : null}
                  </select>
  
                 </Grid>
  
                   </Grid>
              </Grid>
  
         
  
              <Grid size={12} display='flex' className='area-4'>
                  <button type='button' onClick={() => setHowManyPeople(prev => prev - 1)}><img src={minus} />    </button>
                  <input type='text' style={{backgroundColor: 'transparent'}}  disabled value={`${howManyPeople} people`} />
                  <button type='button'  onClick={() => setHowManyPeople(prev => prev + 1)}><img src={plus} /> </button>
              </Grid>
  
              
              <button type="submit">Make a Reservation</button>
                 
        </Grid>
      </form>
       
    </Stack>
    <Box className='line-L2' width='700px'   display={{xs: 'none', md: 'block'}}>
                      <img src={Line} alt='' />
    </Box>
    </Stack>
    <Footer/>
    </>
  )
}
