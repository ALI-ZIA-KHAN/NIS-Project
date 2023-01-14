import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { analytics} from "../src/firebase"
import { logEvent } from "firebase/analytics";

const CreditCard=()=>{
  const navigate = useNavigate()
  const handleCheckout =() =>{
    navigate("/last")
    logEvent(analytics, 'Credit card Attached', { name: 'user' });
  }
    return(
        <>
          <Box sx={{ flexGrow: 1, marginBottom:'30px'}}>
        <AppBar position="static" sx={{ backgroundColor: 'red' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              KFC
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
                
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} sx={{margin:'0 auto'}}>
          <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
        Enter your credit card number
      </Typography>
      <TextField sx={{left:'1%',width:'100%',marginTop:'20px',marginBottom:'1%'}} id="outlined-basic" label="Card Number" variant="outlined" type='text' autoComplete="off" />
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}} onClick={handleCheckout} variant="contained">
      CHECKOUT
      </Button>
      </Container>
      </Grid>
      </Grid>
    </Box>

        </>
    )
}

export default CreditCard;