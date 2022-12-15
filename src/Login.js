import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
    return (
    <>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'red'}}>
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
     <Typography sx={{textAlign:'center',fontWeight:'600',marginBottom:'4%',marginTop:'4%'}} variant="h5">LOGIN</Typography><br></br>
      <TextField sx={{left:'40%',width:'20%',marginBottom:'1%'}} id="outlined-basic" label="Mobile number or email address" variant="outlined" type='text' autoComplete="off" /><br></br><br></br>
      <TextField sx={{left:'40%',width:'20%',marginBottom:'3%'}} id="outlined-basic" label="Password" variant="outlined" type='password' autoComplete="off"/><br></br><br></br>
      <Button sx={{left:'40%',backgroundColor:'red',width:'20%'}} variant="contained">SIGN IN</Button><br></br><br></br>
      </>
  );
}
