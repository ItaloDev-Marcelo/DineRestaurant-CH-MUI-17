import {useEffect} from 'react'
import Footer  from '../Footer'
import { AppBar, Stack, Box, Typography, Button} from '@mui/material'
import ScrollReveal from "scrollreveal";
import Logo from '../../assets/images/logo.svg'

export default function bookYourTable()  {

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
    <Stack className='pt-1' component='div'>
        <Stack className='top-bg reveal'>
        <AppBar color='trasparent' position='static' sx={{display: {xs: 'none', lg: 'block'}, boxShadow: 'none', paddingTop: '5em', paddingLeft: '10em'}} >
                  <img src={Logo} alt=''/>
         </AppBar>
        </Stack>
        
          <Box  sx={{color: 'white',maxWidth: {lg: '700px'}, padding: {xs: '4em'}, position: 'relative', top: {xs: '4em', sm: '24em',  lg: '1.5em'}, left: {lg: '5.5em'}, textAlign: {xs: 'center', lg: 'left'}}} className='reveal'>
                   <Typography component='p' margin='1em 0'  display={{xs: 'block', lg: 'none'}}> <Typography component='strong' fontSize={{xs: '2em', sm: '3.5em'}}>dine</Typography>   </Typography>
                   <Typography component='h1' fontSize={{xs: '2em', sm: '4em', lg: '5em'}} padding={{xs: '0 1em',sm : '0 2em', lg: '0'}} marginBottom={{xs: '1em' ,lg: '0'}} lineHeight={{xs:'1.2em', lg: '1.3em'}}>Reservations</Typography>
                   <Typography component='p' maxWidth={{lg: '400px'}} margin='1em 0' padding={{sm: '0 13em', lg: '0'}} fontSize={{md: '1.3em'}} lineHeight={{xs: '1.5em', lg: '1.7em'}} >We can’t wait to host you. If you have any special requirements please feel free to 
                   call on the phone number below. We’ll be happy to accommodate you.</Typography>
                   <Button sx={{background: 'trasparent', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', outline: '1px solid white',color: '#fff', '&:hover': {background: 'white', color: '#000'}}}>Reserve Place</Button>
          </Box>
        <Stack className='nx'>

        </Stack>
    </Stack>
    <Footer/>
    </>
  )
}
