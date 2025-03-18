import React from 'react'
import Logo from '../assets/images/logo.svg';

import { Stack, Typography, Link } from '@mui/material';

export default function Rodape()  {
  return (
    <Stack component='footer' sx={{background: '  #101010;',color: 'white'}} >
      <Stack component='div' width='25%'>
        <img src={Logo} alt='logo' />
      </Stack>
      <Stack component='div' className='address-area'>
         <Typography component='p'></Typography>
         <Typography component='p'></Typography>
         <Link href='tel:+00441234567'>00 44 123 4567</Link>
      </Stack>
      <Stack component='div'>
            <Typography component='p'>Open Times</Typography>
            <Typography component='p'>Mon - Fri: 09:00 AM - 10:00 PM</Typography>
            <Typography component='p'>Sat - Sun: 09:00 AM - 11:30 PM</Typography>
      </Stack>
    </Stack>
  )
}
