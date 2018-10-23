import React, { Component } from 'react';
import styled from 'styled-components';
import ShelftChanger from '../../Components/ShelfChanger/ShelfChanger';

const BookCard = styled.div`
  width: 200px;
  border-radius: 15px;
  height: max-content;
  transition: all .25s;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .3);
  background: linear-gradient(to bottom, rgba(106, 110, 234, 0.459), rgba(250, 250, 250, 0.459));
  &:hover {
      transform: scale(1.085);
      box-shadow: 0 6px 10px 5px rgba(0 , 0, 0, .15);
      color: #6B6CF2;
  }
  h5 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;
    span {
      color: gray;
    }
  }
  @media (max-width: 500px) {
    width: 110px;
  }
`

const BookCover = styled.div`
    background-color: black;
    background: url(${props => props.imageURL});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 200px;
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-end;
    @media (max-width: 500px) {
      height: 160px;
      width: 110px;
    }
    .plus-sign {
      height: 27% !important;
      width: 40% !important;
      margin-left: 1rem;
      transition: all .25s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

class Book extends Component {
  state = {
    showSelfChanger : false
  }

  render() {
    const { image, author, title, id } = this.props;

    return (
      <BookCard>
        <BookCover imageURL={image}>
          <ShelftChanger bookID={id} />
        </BookCover>
        <h5>{title} <br /> <span>{author}</span></h5>

      </BookCard>
    )
  }
}

export default Book;