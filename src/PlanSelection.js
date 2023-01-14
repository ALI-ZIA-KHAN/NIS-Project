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

const PlanSelection=()=>{
  const navigate = useNavigate()
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


    <Typography variant="h4" gutterBottom sx={{marginBottom:'40px',textAlign:'center'}}>
    Choose your plan
    </Typography> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="h3" gutterBottom sx={{marginTop:'30px'}}>
          Annual
      </Typography>
      <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
      $12.00 USD / month
      </Typography>
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}} onClick={()=>navigate("/credit")} variant="contained">
      GET STARTED
      </Button>
      </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="h3" gutterBottom sx={{marginTop:'30px'}}>
          Quarterly
      </Typography>
      <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
      $20.00 USD / month
      </Typography>
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}} onClick={()=>navigate("/credit")} variant="contained">
      GET STARTED
      </Button>
      </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="h3" gutterBottom sx={{marginTop:'30px'}}>
          Monthly
      </Typography>
      <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
      $30.00 USD / month
      </Typography>
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}} onClick={()=>navigate("/credit")} variant="contained">
      GET STARTED
      </Button>
      </Container>
        </Grid>

      </Grid>
    </Box>

        </>
    )
}

export default PlanSelection;