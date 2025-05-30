
import { Stack, Typography, Button } from '@mui/material';


import {useNavigate } from 'react-router-dom'

export default  function MiddleSection() {

  
    const Navigate = useNavigate()
  
  
    

  return (
    <Stack className='Middle-Page reveal' textAlign='center'  alignItems='center' justifyContent={{xs: 'center', lg: 'space-between'}} flexDirection={{lg: 'row'}} display='flex' padding={{xs: '1em', sm: '2em 3em', md: '2.5em 4em', lg: '2em 7.5em'}}>
    
            <Typography className='reveal'  component='h5' marginTop={{lg: '1em'}}  fontSize={{xs: '2.5em', md: '3.3em', lg: '4em'}} color='#fff'>Ready to make a reservation?</Typography>
       

       
          <Button className='revealR' onClick={() => Navigate('/Book')}  sx={{background: 'trasparent', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', outline: '1px solid white',color: '#fff', '&:hover': {background: 'white', color: '#000'}}}>Book a table</Button>
       

    </Stack>
  )
}
