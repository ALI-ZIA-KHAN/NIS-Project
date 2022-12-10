import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Signup=()=>{
    return(
        <>
        <br></br><br></br>
        <Typography sx={{textAlign:'center',fontWeight:'600'}} variant="h5">SIGNIN HERE</Typography><br></br>
      <TextField sx={{left:'40%',width:'20%'}} id="outlined-basic" label="Mobile number or email address" variant="outlined" type='text' autoComplete="off" /><br></br><br></br>
      <TextField sx={{left:'40%',width:'20%'}} id="outlined-basic" label="Password" variant="outlined" type='password' autoComplete="off"/><br></br><br></br>
      <Button sx={{left:'40%',backgroundColor:'red',width:'20%'}} variant="contained">SIGN IN</Button><br></br><br></br>
    
      <Typography sx={{textAlign:'center'}} variant="h6">OR</Typography><br></br>
    
      <Button sx={{backgroundColor:'#4267b2',left:'40%',width:'20%'}} variant="contained">Continue with Facebook</Button><br></br><br></br>
      <Button sx={{backgroundColor:'#4285f4',left:'40%',width:'20%'}} variant="contained">Continue with Google</Button>
      </>
      )

}

export default Signup;