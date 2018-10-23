import React, { Component } from 'react';
import { BookCard, BookCover } from '../../Styles/Styles';
import ShelftChanger from '../../Components/ShelfChanger/ShelfChanger';
import NoCover from '../../assets/images/black.jpg';

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
    const { shelf, authors, title, imageLinks, changeShelves } = this.props;

    return (
      <BookCard>
        <BookCover imageURL={imageLinks ? imageLinks.thumbnail : NoCover}>
          <ShelftChanger 
            changeShelves={(shelf) => changeShelves(shelf)} 
            shelf={shelf}
            click={this.showShelfChangerHandler}
            showShelfChanger={this.state.showShelfChanger} />
        </BookCover>
        <h5>{title} <br /> <span>{authors ? authors[0] : 'Unknown Author'}</span></h5>

      </BookCard>
    )
  }
}

export default Book;