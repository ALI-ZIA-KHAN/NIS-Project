import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
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

const handlecookieAcceptance =()=>{
  setCookies(null)
  logEvent(analytics, 'Cookie-Accepted', { name: 'user'});
}

const handlecookieRejection =()=>{
  setCookies(null)
  logEvent(analytics, 'Cookie-Rejected', { name: 'user'});
}

const handlePopup = ()=>{
  setValue(null)
  logEvent(analytics, 'PopUp Clicked'); //, { name: 'user'})
}
  const [value,setValue] = useState(null);
  const [cookies,setCookies] = useState(null)
  useEffect(()=>{
    setTimeout(()=>{
        setCookies('yes')
    },4000)

    setTimeout(()=>{
        setValue('yes')
    },8000)
    },[])


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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
            ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
            doloribus! orem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
            natus eveniet ratione temporibus aperiam harum alias!
          </P>
          
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
      {value==='yes'?
            <Alert severity="info" sx={{position:'absolute',margin:'0 auto'}}>
            <AlertTitle>Info</AlertTitle>
            Check your browser security — <strong>Click Okay</strong>
            <br></br><br></br>
            <Button onClick={handlePopup} sx={{backgroundColor:'blue',width:'50%'}} variant="contained">Okay </Button>
          </Alert>:null}

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

export default NextPage;