import React from "react";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: #fff;
  z-index: 100;
  width: 100%;
  top: 0;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 100px;
  margin-left: 20px;
`;

const CenterContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: fit-content;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 999px;

  input {
    border: none;
    padding: 10px;
    height: 30px;
    outline: none;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-right: 80px;
`;

const Header = () => {
  return (
    <HeaderContainer>
    
    <Link to='/'>
        <Logo src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="Airbnb Logo"
      />
      </Link>

      <CenterContent>
        <input type="text" />
        <SearchIcon />
      </CenterContent> 

      <RightContent> 
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;
