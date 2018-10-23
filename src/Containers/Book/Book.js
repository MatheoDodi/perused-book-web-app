import React, { Component } from 'react';
import styled from 'styled-components';
import ShelftChanger from '../../Components/ShelfChanger/ShelfChanger';

const BookCard = styled.div`
  display: grid;
  justify-items: center;
  width: 210px;
  border-radius: 15px;
  height: max-content;
  transition: all .25s;
  &:hover {
      transform: scale(1.085);
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
    width: 120px;
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
    box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .3);
    transition: all .25s;
    &:hover {
      box-shadow: 0 6px 10px 5px rgba(0 , 0, 0, .15);
    }
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
    showShelfChanger : false
  }

  showShelfChangerHandler = () => {
    this.setState( prevState => {
      return { showShelfChanger: !prevState.showShelfChanger}
    } )
  }

  render() {
    const { book, image, author, title, changeShelves } = this.props;

    return (
      <BookCard>
        <BookCover imageURL={image}>
          <ShelftChanger 
            changeShelves={(shelf) => changeShelves(shelf)} 
            shelf={book.shelf}
            click={this.showShelfChangerHandler}
            showShelfChanger={this.state.showShelfChanger} />
        </BookCover>
        <h5>{title} <br /> <span>{author}</span></h5>

      </BookCard>
    )
  }
}

export default Book;