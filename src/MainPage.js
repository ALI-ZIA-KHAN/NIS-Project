import React, { useState } from "react";
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

const MainPage = () => {
  const navigate = useNavigate();
  const [value,setValue] = useState(null);
  const [cookies,setCookies] = useState(null)
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
      {value===null?
        <Alert severity="info" sx={{position:'absolute',margin:'0 auto'}}>
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
        <br></br><br></br>
        <Button onClick={()=>setValue('yes')} sx={{backgroundColor:'blue',width:'50%'}} variant="contained">Okay </Button>
      </Alert>:null}
      {cookies===null? <Alert severity="error" sx={{position:'absolute',marginTop:'37%',width:'100%'}}>
        This site uses cookies. Learn more about how and why.
        <Container sx ={{display:'flex',marginTop:'3%'}}>
        <Button onClick={()=>setCookies('yes')} sx={{backgroundColor:'red',width:'50%'}} variant="contained">ACCEPT ALL</Button>
        <Button onClick={()=>setCookies('yes')} sx={{marginLeft:'1%',backgroundColor:'red',width:'50%'}} variant="contained">REJECT ALL</Button>
        </Container>
      </Alert>:null}
    </Main>
    </>
  );
};

export default MainPage;