import React from 'react'
import styled from "styled-components";
import tutor_icon from "../img/tutor_icon.PNG";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Container = styled.div`
    flex: 1;
    background-color:  #2153be;
    height: 100vh;
    color: white;   
    position: sticky;
    top: 0%;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 40px;
`;

const Img = styled.img`
  height: 50px;

`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  font-size: 30px;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #4e74c5;
`;

const Login = styled.div`
  font-size: 30px;
`;

const Button = styled.button`
  font-size: 30px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  font-weight: 500;
  color: azure;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={tutor_icon}/>
            TutorVision
        </Logo>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Home
        </Item>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Explore
        </Item>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Library
        </Item>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          History
        </Item>
        <Hr/>
        <Login>
          Sign in to subscribe and comment
          <Button>
            <AccountCircleIcon fontSize='large'></AccountCircleIcon>
            Sign in
          </Button>
        </Login>
        <Hr/>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Settings
        </Item>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Help
        </Item>
        <Item>
          <HomeIcon fontSize='large'></HomeIcon>
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu