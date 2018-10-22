import React, { Component } from 'react';
import styled from 'styled-components';

const BookCard = styled.div`
  height: 300px;
  width: 200px;
  transition: all .25s;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .3);
  &:hover {
      transform: scale(1.085);
      box-shadow: 0 6px 10px 5px rgba(0 , 0, 0, .15);
      cursor: pointer;
      color: #6B6CF2;
  }
  h5 {
    text-align: center;
    font-weight: normal;
  }
`

const BookCover = styled.div`
    background: url(${props => props.imageURL});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  }
`

class Book extends Component {

  render() {
    const { image, id, description, title } = this.props;

    return (
      <BookCard>
        <BookCover imageURL={image}>
        
        </BookCover>
        <h5>{title}</h5>
      </BookCard>
    )
  }
}

export default Book;