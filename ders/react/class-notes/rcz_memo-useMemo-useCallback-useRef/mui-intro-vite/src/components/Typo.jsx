import React from 'react'
import {Typography,Box, Container, Stack, Button} from "@mui/material"
const Typo = () => {
  return (
    <Container maxWidth="sm">
        <Box sx={{padding: "1rem", display:"flex", flexDirection: "column", border: "1px solid tomato"}}>
        <Typography variant='h6' component="h1" color="lightcoral" mt={4} >MUI Typo</Typography>
        <Typography variant='subtitle2' color="palegreen" mt={4} >MUI Typo</Typography>
        <Typography variant='button'>Button Text</Typography>
        <Typography variant='body2' sx={{color: "blue", backgroundColor: "palevioletred", mt:"1rem"}} align='center'>Button Text</Typography>
       </Box>

    <Stack direction="row" spacing={1} mt={4} justifyContent='center' alignItems="center">
        <Button variant='outline' color="secondary">Click</Button>
        <Button variant='contained' color='error'>Click</Button>
        <Button variant='contained' color='success'>Click</Button>
        <Button variant='contained' color='warning'>Click</Button>
        <Button variant='contained' sx={{color: "purple", backgroundColor: "yellow"}}>Click</Button>
        <Button variant='contained' sx={{color: "primary.main", backgroundColor: "secondary.light"}}>Click</Button>
    </Stack>
    </Container>

  )
}

export default Typo