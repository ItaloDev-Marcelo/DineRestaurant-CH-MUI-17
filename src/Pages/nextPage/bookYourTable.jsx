import {useEffect, useState} from 'react'
import Footer  from '../Footer'
import { AppBar, Stack, Box, Typography, Button} from '@mui/material'
import Grid from '@mui/material/Grid2';

import ScrollReveal from "scrollreveal";
import Logo from '../../assets/images/logo.svg'

import {useNavigate } from "react-router-dom"
export default function bookYourTable()  {
const Navigate = useNavigate()

const [howManyPeople, setHowManyPeople] = useState(1)

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
        
          <Box  sx={{color: 'white',maxWidth: {lg: '700px'}, padding: {xs: '4em'}, position: 'relative', top: {xs: '4em', sm: '1em',  lg: '1.5em'}, left: {lg: '5.5em'}, textAlign: {xs: 'center', lg: 'left'}}} className='reveal'>
                   <Typography component='p' margin='1em 0'  display={{xs: 'block', md: 'none'}}> <Typography component='strong' fontSize={{xs: '2em', sm: '3.5em'}}>dine</Typography>   </Typography>
                   <Typography component='h1' fontSize={{xs: '2em', sm: '4em', lg: '5em'}} padding={{xs: '0 1em',sm : '0 1em', lg: '0'}} marginBottom={{xs: '1em' ,lg: '0'}} lineHeight={{xs:'1.2em', lg: '1.3em'}}>Reservations</Typography>
                   <Typography component='p' maxWidth={{lg: '400px'}} margin='1em 0' padding={{sm: '0 13em', lg: '0'}} fontSize={{md: '1.3em'}} lineHeight={{xs: '1.5em', lg: '1.7em'}} >We can’t wait to host you. If you have any special requirements please feel free to 
                   call on the phone number below. We’ll be happy to accommodate you.</Typography>
                   <Button  onClick={() => Navigate('/DineHomePage')}   sx={{background: 'trasparent', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', outline: '1px solid white',color: '#fff', '&:hover': {background: 'white', color: '#000'}}}>Reserve Place</Button>
          </Box>
    </Stack>
    <Stack  maxWidth={{xs: '330px', md: '450px'}} 
     backgroundColor='#fff' position='relative' top={{xs:'-15em' , md: '-5em', lg: '-25em'}}
     left={{xs: '1.5em', md:'17.5em', lg: '50em'}} padding='2em' height={{xs:'500px'}}
      boxShadow='8px 8px 5px -6px rgba(0,0,0,0.41)'>
      
      <Grid container>
        
      <Grid size={12}  className='area-1' >
            <label htmlFor='name'>
            <input type='text' name='name' id='name' placeholder='Name' /> 
            </label>
            </Grid>

            <Grid  size={12}  className='area-1'>
            <label htmlFor='email'>
            <input type='email' name='email' id='email' placeholder='Email' /> 
            </label>
            </Grid>


            <Grid size={12}   display='flex' component='div' className='sub-area'  >
            
               <Grid container  className='area-2' >
               <Grid size={{xs: 12, md: 2}}>
                <label>Pick a Date</label>
            </Grid>
               <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 2em' }}>
               <input type='number' name='mes' id='mes' placeholder='MM'/>
               </Grid>
               <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 3em 0 1em' }}>
               <input type='number' name='day' id='day' placeholder='DD'/>
               </Grid>
               <Grid size={{xs: 4, md: 2}} padding={{xs: '0 0 .5em 0', md:'0' }}>
               <input type='number' name='year' id='year' placeholder='YYYY'/>

               </Grid>

                 </Grid>
            </Grid>

            <Grid size={12}   display='flex' component='div' className='sub-area'  >
            
               <Grid container  className='area-2' >
               <Grid size={{xs: 12, md: 2}}>
                <label>Pick a time</label>
            </Grid>
               <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 2em' }}>
               <input type='number' name='hora'  maxLength='2'  id='hora' placeholder='09'/>
               </Grid>
               <Grid size={{xs: 4, md: 4}} padding={{xs: '0  2em 0  0', md:'0 3em 0 1em' }}>
               <input type='number' name='minuto'  maxLength='2' placeholder='00'  id='minuto'/>
               </Grid>
               <Grid size={{xs: 4, md: 2}} padding={{xs: '0 0 .5em 0', md:'0' }}>
               <select>
                   <option value='AM' selected>AM</option>
                   <option value='PM' >PM</option>
                </select>

               </Grid>

                 </Grid>
            </Grid>

       

            <Grid size={12} display='flex' className='area-4'>
                <button type='button' onClick={() => setHowManyPeople(prev => prev - 1)}>-</button>
                <input type='text'  disabled value={`${howManyPeople} people`} />
                <button type='button'  onClick={() => setHowManyPeople(prev => prev + 1)}>+</button>
            </Grid>

            
            <Button onClick={() => Navigate('/Book')} sx={{ background: 'black', width: '100% ', height: '50px', fontWeight: '600', position: 'relative', top: '1em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black', border: '1px solid #000' }, alignSelf: {xs: 'center', lg: 'flex-start'}}}>Make a Reservation</Button>
               
      </Grid>
       
    </Stack>
    <Footer/>
    </>
  )
}
