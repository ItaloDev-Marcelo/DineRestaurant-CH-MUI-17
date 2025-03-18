import React, { useEffect } from 'react'
import Logo from '../assets/images/logo.svg';

import { Stack, Typography, Link } from '@mui/material';
import ScrollReveal from "scrollreveal";
export default function Rodape()  {

   useEffect(() => {
        ScrollReveal().reveal(".reveal", {
          distance: "5px",
          duration: 2000,
          easing: "ease-in-out",
          origin: "left",
          reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
        });
       }, []) 
    
  return (
    <Stack component='footer'  padding={{xs: '2em', lg: '4em 2em'}} sx={{background: 'hsl(0, 0.00%, 6.30%);',color: 'white', display: 'flex',textAlign: {xs: 'center', lg: 'left'}, flexDirection: {lg: 'row'}}} >
      <Stack component='div' className='reveal'  marginLeft={{xs: '.5em' , md: '7em', lg: '6em'}} width={{xs: '25%',sm: '15%', lg: '10%'}} alignSelf={{xs: 'center', lg: 'flex-start'}} margin='1em 7em 0 5em'>
        <img src={Logo} alt='logo' />
      </Stack>
      <Stack display='flex' flexDirection={{xs: 'column', lg: 'row'}} >
      <Stack component='div'   className='address-area reveal ' margin='1em 0'>
         <Typography component='p' marginBottom='.2em'>Marthwaite, Sedbergh</Typography>
         <Typography component='p' marginBottom='.3em'>Cumbria</Typography>
         <Link href='tel:+00441234567' sx={{textDecoration: 'none', color: '#fff'}}  >00 44 123 4567</Link>
      </Stack>
      <Stack component='div' className='reveal'  margin={{xs: '1em 0', lg: '1em 1.5em 0 5em'}}>
            <Typography component='p' marginBottom='.7em'>Open Times</Typography>
            <Typography component='p'>Mon - Fri: 09:00 AM - 10:00 PM</Typography>
            <Typography component='p'>Sat - Sun: 09:00 AM - 11:30 PM</Typography>
      </Stack>
      </Stack>
    </Stack>
  )
}
