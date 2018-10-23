import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
      width: 60%;
      border-radius: 5px;
      overflow: hidden;
      background: #6A6FEA;
      margin: 1rem;
      box-shadow: -3px 3px 8px rgba(0, 0, 0, .35);
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
      select {
      padding: 5px 8px;
      width: 130%;
      border: none;
      box-shadow: none;
      background: transparent;
      background-image: none;
      -webkit-appearance: none;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 1rem;
      }
      &:hover {
        cursor: pointer;
      }
    }
    select:focus {
      outline: none;
    }
`

const ShelfChanger = ({ changeShelves, shelf, click, showShelfChanger }) => {
  if (!shelf) {
    shelf = 'none';
  }
  return (
    <SelectWrapper shelf={shelf} showShelfChanger={showShelfChanger} onClick={click}>
      <select defaultValue={shelf} onChange={(e) => changeShelves(e.target.value)} >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Now Reading</option>
        <option value="wantToRead">Want To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </SelectWrapper>
  )
}

export default ShelfChanger;