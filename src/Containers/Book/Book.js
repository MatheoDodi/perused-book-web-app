import React, { Component } from 'react';
import { BookCard, BookCover } from '../../Styles/Styles';
import ShelftChanger from '../../Components/ShelfChanger/ShelfChanger';
import NoCover from '../../assets/images/black.jpg';

class Book extends Component {


  render() {
    const { shelf, authors, title, imageLinks, changeShelves } = this.props;

    return (
      <BookCard>
        <BookCover imageURL={imageLinks ? imageLinks.thumbnail : NoCover}>
          <ShelftChanger 
            changeShelves={(shelf, path) => changeShelves(shelf, path)} 
            shelf={shelf} />
        </BookCover>
        <h5>{title} <br /> <span>{authors ? authors[0] : 'Unknown Author'}</span></h5>

      </BookCard>
    )
  }
}

export default Book;