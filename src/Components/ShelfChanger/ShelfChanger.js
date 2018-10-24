import React from 'react';
import { withRouter } from 'react-router-dom';
import { SelectWrapper } from '../../Styles/Styles';

const ShelfChanger = ({ changeShelves, shelf, click, location}) => {
  if (!shelf) {
    shelf = 'none';
  }
  return (
    <SelectWrapper shelf={shelf} onClick={click}>
      <select defaultValue={shelf} onChange={(e) => changeShelves(e.target.value, location.pathname)} >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Now Reading</option>
        <option value="wantToRead">Want To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </SelectWrapper>
  )
}

export default withRouter(ShelfChanger);