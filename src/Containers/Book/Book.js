import React, { Component } from 'react';
import styled from 'styled-components';

const BookCard = styled.div`
  height: 300px;
  width: 200px;
  margin-bottom: 10rem;
`

const BookCover = styled.div`
    background: url(${props => props.imageURL});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
    transition: all .25s;
    box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .3);
    &:hover {
      transform: scale(1.085);
      box-shadow: 0 6px 10px 5px rgba(0 , 0, 0, .15);
      cursor: pointer;
  }
`

class Book extends Component {

  render() {
    const { image, id, description, title } = this.props;

    return (
      <BookCard>
        <BookCover imageURL={image}>
        
        </BookCover>
        <h6>{title}</h6>
      </BookCard>
    )
  }
}

export default Book;