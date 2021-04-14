import React, { useState } from 'react';
import styled from 'styled-components';
import PeopleIcon from '@material-ui/icons/People';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const SearchContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 25%;
  width: 100vw;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 380px;
  }

  input {
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 420px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .date-btn {
    position: absolute;
    left: 0;
    top: 480px;
    text-transform: inherit !important;
    background-color: #ff7779;
    color: #fff;
    width: 579px;
  }

  .date-btn:hover {
    background-color: #fff;
    color: #ff7779;
  }
`;

const Search = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate, 
    endDate: endDate,
    key: 'selection'
  };

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <SearchContainer>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of Guests <PeopleIcon /></h2>
      <input min={2} defaultValue={0} type="number" />
      <Button className="date-btn" onClick={() => history.push('/search')}>Search Airbnb</Button>
    </SearchContainer>
  );
};

export default Search;