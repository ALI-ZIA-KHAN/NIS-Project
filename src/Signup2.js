import * as React from 'react';
import { useNavigate } from "react-router-dom";
import validator from 'validator'
import { useState } from "react";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { app, analytics} from "../src/firebase"
import { logEvent } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Container from '@mui/material/Container';



export default function Signup2() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [val,setVal] = useState(false)

  // const analytics = getAnalytics(app);
  // let auth = getAuth(app)
  // let googleProvide=new GoogleAuthProvider()
  const navigate = useNavigate();
  const handleSubmit = () => {

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
        navigate("/login2");
      //   if (validator.isStrongPassword(password, {
      //     minLength: 8, minLowercase: 1,
      //     minUppercase: 1, minNumbers: 1, minSymbols: 1
      //   })) {
      //     logEvent(analytics, 'Strong-Password', { name: 'user' });
      //   } else {
      //     logEvent(analytics, 'Weak-Password', { name: 'user' });
      //   }
      // }).catch((err) => {
      //   console.log("error", err)
      // })
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
      <Box sx={{ flexGrow: 1,margin:'10px'}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}  sx={{margin:'0 auto'}}>
      <Typography sx={{ textAlign: 'center', fontWeight: '600', marginTop: '4%' }} variant="h5">SIGNUP HERE</Typography><br></br>
      <TextField sx={{ width: '100%' }} className="t1" id="outlined-basic" label="Mobile number or email address" variant="outlined" type='text' onChange={(e) => setEmail(e.target.value)} autoComplete="off" /><br></br><br></br>
      <TextField sx={{ width: '100%',marginBottom:'20px' }} className="t2" id="outlined-basic-1" label="Password" variant="outlined" type='password' onChange={(e) => setPassword(e.target.value)} autoComplete="off" /><br></br>
      <Typography sx={{ textAlign: 'center', fontWeight: '80'}} variant="p">*Should contain upper,lowercase,number and symbol</Typography><br></br><br></br>
      <Button sx={{ backgroundColor: 'red', width: '100%' }} variant="contained" onClick={handleSubmit} >SIGN UP</Button><br></br><br></br>
      {/* {val===true? <Alert severity="info" sx={{width:'40%',left:'1%',position:'relative',margin:'0 auto',marginTop:'-70px'}}>
      <AlertTitle>Premium</AlertTitle>
      Do you want to continue with the same credentials or sign up with another account
        <Container sx ={{display:'flex',marginTop:'3%'}}>
        <Button sx={{backgroundColor:'red',width:'50%'}} variant="contained">CONTINUE</Button>
        <Button sx={{marginLeft:'1%',backgroundColor:'red',width:'50%'}} variant="contained">SIGN UP</Button>
        </Container>
      </Alert>:null} */}
      <Typography sx={{ textAlign: 'center' }} variant="h6">OR</Typography><br></br>

      <Button sx={{ backgroundColor: '#4285f4', width: '100%' }} variant="contained">Continue with Google</Button>
      </Grid>
      </Grid>
      </Box>
      
    </>
  )

}