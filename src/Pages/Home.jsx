import {Stack, Box, AppBar, Typography, Button} from '@mui/material'
import logo from '../assets/images/logo.svg';
export default function Home() {
  return (
     <Stack className='header-section' position='relative'>
        <AppBar color='trasparent' sx={{display: {xs: 'none', lg: 'block'}, boxShadow: 'none', paddingTop: '3em', paddingLeft: '10em'}} >
           <img src={logo} alt=''/>
        </AppBar>
        <Box sx={{color: 'white',maxWidth: {lg: '700px'}, padding: {xs: '4em'}, position: 'relative', top: {xs: '14em', sm: '17em', md: '20em', lg: '10em'}, left: {lg: '5.5em'}, textAlign: {xs: 'center', lg: 'left'}}}>
           <Typography component='p' margin='1em 0'  display={{xs: 'block', lg: 'none'}}> <Typography component='strong' fontSize='2em'>dine</Typography>   </Typography>
           <Typography component='h1' fontSize={{xs: '2em', lg: '5em'}} padding={{xs: '0 1em', lg: '0'}} marginBottom={{xs: '1em' ,lg: '0'}}>Exquisite dining since 1989</Typography>
           <Typography component='p' maxWidth={{lg: '350px'}} margin='1em 0' lineHeight='2em'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
           the comfort of our farmhouse.</Typography>
           <Button sx={{background: 'trasparent', fontWeight: '600', position: 'relative', top: '2em', border: 'none', outline: '1px solid white',color: '#fff', '&:hover': {background: 'white', color: '#000'}}}>Book a table</Button>
        </Box>
     </Stack>
  )
}
 