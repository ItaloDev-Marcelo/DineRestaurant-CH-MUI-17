import {Stack, Box, AppBar, Typography, Button} from '@mui/material'
import bankGalery from '../components/bankGalery';
import Img from '../components/image'


import {useNavigate } from 'react-router-dom'
export default function Home() {

      const Navigate = useNavigate()
        const {logo} = bankGalery

  return (
     <Stack className='Dine-home' component='header' position='relative'>
        <AppBar className='reveal home-element-1' color='trasparent' position='static' sx={{display: {xs: 'none', lg: 'block'}, boxShadow: 'none', paddingTop: '3em', paddingLeft: '10em'}} >
           <Img url={logo} />
        </AppBar>
        <Box className='reveal home-element' sx={{color: 'white',maxWidth: {lg: '700px'}, padding: {xs: '4em'}, position: 'relative', top: {xs: '4em', sm: '20em',  lg: '1.5em'}, left: {lg: '5.5em'}, textAlign: {xs: 'center', lg: 'left'}}}>
           <Typography component='p' margin='1em 0'  display={{xs: 'block', lg: 'none'}}> <Typography component='strong' fontSize={{xs: '2em', sm: '3.5em'}}>dine</Typography>   </Typography>
           <Typography component='h1' fontSize={{xs: '2em', sm: '4em', lg: '5em'}} padding={{xs: '0 1em',sm : '0 2em', lg: '0'}} marginBottom={{xs: '1em', sm: 0 ,lg: '0'}} lineHeight={{xs:'1.2em', lg: '1.3em'}}>Exquisite dining since 1989</Typography>
           <Typography component='p' maxWidth={{lg: '400px'}} margin='1em 0' padding={{sm: '0 13em', lg: '0'}} fontSize={{md: '1.3em'}} lineHeight={{xs: '1.5em', lg: '1.7em'}} >Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
           the comfort of our farmhouse.</Typography>
           <Button onClick={() => Navigate('/Book')} sx={{background: 'trasparent', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', outline: '1px solid white',color: '#fff', '&:hover': {background: 'white', color: '#000'}}}>Book a table</Button>
        </Box>
     </Stack>
  )
}
 