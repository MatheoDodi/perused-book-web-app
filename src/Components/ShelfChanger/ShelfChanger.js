import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
      width: 18%;
      border-radius: 5px;
      overflow: hidden;
      background: #6A6FEA;
      margin: 1rem;
      box-shadow: -2px 3px 5px rgba(0, 0, 0, .25);
      &:hover {
        cursor: pointer;
      }
      @media (max-width: 500px) {
        width: 34%;
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
      font-size: 3rem;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
    }
    select:focus {
      outline: none;
}
`

const ShelfChanger = (props) => {
  return (
    <SelectWrapper>
      <select>
        <option defaultValue hidden>+</option>
        <option disabled>Add to...</option>
        <option>Reading</option>
        <option>Will Read</option>
        <option>Read</option>
      </select>
    </SelectWrapper>
  )
}

export default ShelfChanger;