import React, { Component } from 'react';
import { BookCard, BookCover } from '../../Styles/Styles';
import ShelftChanger from '../../Components/ShelfChanger/ShelfChanger';

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