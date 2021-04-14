import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

const SearchResultContainer = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
  }

  .heart-icon {
    position: absolute;
    top: 20px;
    right: 40px;
  }
`;

const SearchResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;

`;

const InfoTop = styled.div`
  width: 40vw;

  h3 {
    font-weight: 300;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 13px;
    color: gray;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;

  .star-icon {
    color: red;
  }
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  p {
    text-align: right;
  }


`;

const SearchResult = ({ img, location, title, description, star, price, total }) => {
  return (
    <SearchResultContainer>
      <img src={img} alt="" />
      <FavoriteBorderIcon className="heart-icon" />
      <SearchResultInfo>

        <InfoTop>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </InfoTop>

        <InfoBottom>
          <Stars>
            <StarIcon className="star-icon" />
            <p><strong>{star}</strong></p>
          </Stars>
          <Price>
            <h2>{price}</h2>
            <p>{total}</p>
          </Price>
        </InfoBottom>

      </SearchResultInfo>
    </SearchResultContainer>
  )
}

export default SearchResult;