import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;

  p {
    padding: 5px;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2020 Airbnb clone! No rights reserved - this is a demo!</p>
      <p>Privacy. Terms. Sitemap. Company Details</p>
    </FooterContainer>
  )
};

export default Footer;