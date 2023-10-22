import React from 'react';
import styled from 'styled-components';
import tutor_icon from "../img/tutor_icon.PNG";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Container = styled.div`
  width: 280px;
  background-color: #0A1C3E;
  height: 100vh;
  color: white;
  position: sticky;
  top: 0;
  font-family: 'Roboto', sans-serif;
`;

const Wrapper = styled.div`
  padding: 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 32px;
  font-size: 28px;
`;

const Img = styled.img`
  height: 50px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  padding: 12px 0;
  gap: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #008080;
  }
`;

const Hr = styled.hr`
  margin: 24px 0;
  border: 0.5px solid #4e74c5;
`;

const Login = styled.div`
  font-size: 20px;
  margin-top: 24px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 8px 16px;
  background-color: #2153be;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3b69c9;
  }
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={tutor_icon} alt="TutorVision" />
          TutorVision
        </Logo>
        <Item>
          <HomeIcon fontSize="large" />
          Home
        </Item>
        <Item>
          <ExploreIcon fontSize="large" />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon fontSize="large" />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <LibraryBooksIcon fontSize="large" />
          Library
        </Item>
        <Item>
          <HistoryIcon fontSize="large" />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to subscribe and comment
          <Button>
            <AccountCircleIcon fontSize="large" />
            Sign in
          </Button>
        </Login>
        <Hr />
        <Item>
          <SettingsIcon fontSize="large" />
          Settings
        </Item>
        <Item>
          <HelpIcon fontSize="large" />
          Help
        </Item>
        <Item>
          <Brightness4Icon fontSize="large" />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
