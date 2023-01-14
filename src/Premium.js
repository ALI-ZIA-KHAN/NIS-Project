import React from "react";
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom/dist";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Premium=()=>{
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
                
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="h3" gutterBottom sx={{marginTop:'30px'}}>
          Free
      </Typography>
      <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
        Free Subscribtion that includes some packages
      </Typography>
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}} variant="contained">
      GET STARTED
      </Button>
      </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="h3" gutterBottom sx={{marginTop:'30px'}}>
            Premium
      </Typography>
      <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
        Premium Subscribtion that includes more packages
      </Typography>
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}}  onClick={()=>navigate("/plan")} variant="contained">
      GET STARTED
      </Button>
      </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Container sx={{border:'1px solid black',height:'20rem'}}>
          <Typography variant="h3" gutterBottom sx={{marginTop:'30px'}}>
          Super Premium
      </Typography>
      <Typography variant="body1" gutterBottom sx={{marginTop:'40px'}}>
        Super Premium Subscribtion that includes all packages
      </Typography>
      <Button sx={{ left: '1%', backgroundColor: 'red', width: '100%' , marginTop:'40px'}} onClick={()=>navigate("/plan")}  variant="contained">
      GET STARTED
      </Button>
      </Container>
        </Grid>

      </Grid>
    </Box>

        </>
    )
}

export default Premium;