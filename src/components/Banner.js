import React, { useState } from "react";
import { Button } from '@material-ui/core';
import Search from './Search';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BannerContainer = styled.div`
  background: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg") center / cover;
  height: 50vh;
  position: relative;
`;

const BannerSearch = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;

  .search-btn {
    background-color: #fff !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    color: #ff7779 !important;
  }
`;

const BannerInfo = styled.div`
  background-color: #000;
  color: #fff;
  padding: 25vh 50px 40px;
  width: 300px; 

  h5 {
    margin-top: 5px;
  }

  .btn-outline {
    background-color: #ff7779;
    color: #fff;
    text-transform: inherit;
    margin-top: 20px;
    font-weight: 600;
  }

  .btn-outline:hover {
    background-color: #fff;
    color: #ff7779;
  }
`;

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <BannerContainer>
    
      <BannerSearch>
      {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className="search-btn" variant="outlined">{showSearch ? 'Hide' : 'Search Dates'}</Button>
      </BannerSearch>

      <BannerInfo>
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
        <Button className="btn-outline" variant="outlined" onClick={() => history.push('/search')}>Explore Nearby</Button>
      </BannerInfo>

    </BannerContainer>
  );
};

export default Banner;