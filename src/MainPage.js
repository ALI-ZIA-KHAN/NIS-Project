import React, { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "./App.scss";
import { useNavigate } from "react-router-dom";
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

const MainPage = () => {
  const [cookies,setCookies] = useState(null)
  useEffect(()=>{
    setTimeout(()=>{
        setCookies('yes')
    },4000)
  },[])
  const handlecookieAcceptance =()=>{
    setCookies(null)
    logEvent(analytics, 'Cookie-Accepted', { name: 'user'});
    logEvent(analytics, 'Url-Changed', { name: 'user'});
    navigate('./duplicate')
  }
  
  const handlecookieRejection =()=>{
    setCookies(null)
    logEvent(analytics, 'Cookie-Rejected', { name: 'user'});
    logEvent(analytics, 'Url-Changed', { name: 'user'});
    navigate('./duplicate')
  }

  
  const navigate = useNavigate();
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
          KFC was one of the first American fast-food chains to expand internationally, opening outlets in Canada, the United Kingdom, Mexico and Jamaica by the mid-1960s. Throughout the 1970s and 1980s, it experienced mixed fortunes domestically, as it went through a series of changes in corporate ownership with little or no experience in the restaurant business. In the early 1970s, KFC was sold to the spirits distributor Heublein
          </P>
          <Button sx={{marginRight:'2%'}} variant="contained" color="inherit" onClick={()=> navigate('/signup')}>Signup</Button>
        <Button variant="contained" color="inherit" onClick={()=> navigate('/login')}>Login</Button>
          
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
      {cookies==='yes'? <Alert severity="error" sx={{position:'absolute',marginTop:'37%',width:'100%'}}>
        This site uses cookies. Learn more about how and why.
        <Container sx ={{display:'flex',marginTop:'3%'}}>
        <Button onClick={handlecookieAcceptance} sx={{backgroundColor:'red',width:'50%'}} variant="contained">ACCEPT ALL</Button>
        <Button onClick={handlecookieRejection} sx={{marginLeft:'1%',backgroundColor:'red',width:'50%'}} variant="contained">REJECT ALL</Button>
        </Container>
      </Alert>:null}

    </Main>
    </>
  );
};

export default MainPage;