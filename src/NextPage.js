import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { usena } from "react-router-dom/dist";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "./App.scss";
import LogoKfc from "./assets/images/logo.png";
import BurgerFries from "./assets/images/burger_fries.png";
import Burger from "./assets/images/burger.png";
import FrenchFries from "./assets/images/french_fries.png";
import FriedChicken from "./assets/images/fried_chicken.png";
import {Main,Header,Ai,Logo,Navigation,Li,Ali,Content,Text,H2,P,OrderNow,Span,Slider,Slides,Footer,Sci,PrevNext,
  Prev,Next,Toggle,} from "./App.elements.js";
  import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Container from '@mui/material/Container';
import { analytics} from "../src/firebase"
import { logEvent } from "firebase/analytics";


const NextPage = () => {
  const [value,setValue] = useState(null);
  const [val,setVal] = useState(false);
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/premium')
    logEvent(analytics, 'Continue With Same Credential', { name: 'user' });
  }

  const handleSignupAgain = () =>{
    navigate('/signup2')
    logEvent(analytics, 'Again Signing Up with strong Credentials', { name: 'user' });
  }

  return (
  <>
    <Main sx={{position:'relative'}}>
      <Header>
        <Ai href="#">
          <Logo src={LogoKfc} alt="" />
        </Ai>
        <Toggle></Toggle>
        <Navigation>
          <Li>
            <Ali href="#">Home</Ali>
          </Li>
          <Li>
            <Ali href="#">Menu</Ali>
          </Li>
          <Li>
            <Ali href="#">About</Ali>
          </Li>
          <Li>
            <Ali href="#">Contact</Ali>
          </Li>
        </Navigation>
      </Header>
      <Content>
        <Text>
          <H2>
            Its finger <br /> Lickin <Span> Good </Span>
          </H2>
          <P>
          KFC was one of the first American fast-food chains to expand internationally, opening outlets in Canada, the United Kingdom, Mexico and Jamaica by the mid-1960s. Throughout the 1970s and 1980s, it experienced mixed fortunes domestically, as it went through a series of changes in corporate ownership with little or no experience in the restaurant business. In the early 1970s, KFC was sold to the spirits distributor Heublein.
          </P>
          <Button onClick={()=> setVal(true)} sx={{ backgroundColor: '#4267b2', width: '100%' }} variant="contained">Subscribe with Premium</Button>
          
          {/* <OrderNow href="#">Signup</OrderNow> */}
        </Text>

        <Slider>
          <Slides className="slides active">
            <img src={BurgerFries} alt="" />
          </Slides>
          <Slides className="slides">
            <img src={FrenchFries} alt="" />
          </Slides>
          <Slides className="slides">
            <img src={Burger} alt="" />
          </Slides>
          <Slides className="slides">
            <img src={FriedChicken} alt="" />
          </Slides>
        </Slider>
      </Content>
      {val===true? 
        <Alert severity="info" sx={{position:'absolute',margin:'0 auto',marginTop:'-70px'}}>
      <AlertTitle>Premium</AlertTitle>
      Do you want to continue with the same credentials or sign up with another account
        <Container sx ={{display:'flex',marginTop:'3%'}}>
        <Button sx={{backgroundColor:'red',width:'100%'}} variant="contained" onClick={handleContinue}>CONTINUE</Button>
        <Button sx={{marginLeft:'1%',backgroundColor:'red',width:'100%'}} variant="contained" onClick={handleSignupAgain}>SIGN UP</Button>
        </Container>
      </Alert>
      :null}
      <Footer>
        <Sci>
          <li>
            <a href="#">
              <SiFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <SiInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <SiTwitter />
            </a>
          </li>
        </Sci>
        <PrevNext>
          <p>Always Fresh</p>
          <Prev>
            <IoArrowBack />
          </Prev>
          <Next>
            <IoArrowForward />
          </Next>
        </PrevNext>
      </Footer>
      {/* {value==='yes'?
            <Alert severity="info" sx={{position:'absolute',margin:'0 auto'}}>
            <AlertTitle>Premium</AlertTitle>
            <br></br><br></br>
            <Button onClick={handlePopup} sx={{backgroundColor:'blue',width:'50%'}} variant="contained">Okay </Button>
          </Alert>:null} */}
          {/* {val===true? 
        <Alert severity="info" sx={{left:'-30%',position:'relative',margin:'0 auto',marginTop:'-70px'}}>
      <AlertTitle>Premium</AlertTitle>
      Do you want to continue with the same credentials or sign up with another account
        <Container sx ={{display:'flex',marginTop:'3%'}}>
        <Button sx={{backgroundColor:'red',width:'100%'}} variant="contained">CONTINUE</Button>
        <Button sx={{marginLeft:'1%',backgroundColor:'red',width:'100%'}} variant="contained">SIGN UP</Button>
        </Container>
      </Alert>
      :null} */}
    </Main>
    </>
  );
};

export default NextPage;