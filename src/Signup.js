import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {app} from "../src/firebase"
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth"


export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  let auth=getAuth()
  let googleProvide=new GoogleAuthProvider()

  const handleSubmit=()=>{

    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
      console.log(res.user)
    }).catch((err)=>{
      console.log("error",err)
    })
  }

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

        <Typography sx={{textAlign:'center',fontWeight:'600',marginTop:'4%'}} variant="h5">SIGNIN HERE</Typography><br></br>
      <TextField sx={{left:'40%',width:'20%'}} id="outlined-basic" label="Mobile number or email address" variant="outlined" type='text'  onChange={(e) => setEmail(e.target.value)} autoComplete="off" /><br></br><br></br>
      <TextField sx={{left:'40%',width:'20%'}} id="outlined-basic" label="Password" variant="outlined" type='password'  onChange={(e) => setPassword(e.target.value)}  autoComplete="off"/><br></br><br></br>
      <Button sx={{left:'40%',backgroundColor:'red',width:'20%'}} variant="contained" onClick={handleSubmit} >SIGN IN</Button><br></br><br></br>
    
      <Typography sx={{textAlign:'center'}} variant="h6">OR</Typography><br></br>
    
      <Button sx={{backgroundColor:'#4267b2',left:'40%',width:'20%'}} variant="contained">Continue with Facebook</Button><br></br><br></br>
      <Button sx={{backgroundColor:'#4285f4',left:'40%',width:'20%'}} variant="contained">Continue with Google</Button>
      </>
      )

}


