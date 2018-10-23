import React, { Component, Fragment } from 'react';
import { BookShelfDiv } from '../Styles/Styles';
import NoCover from '../assets/images/black.jpg';
import Book from './Book/Book';
import { UndrawFilingSystem, UndrawUpvote, UndrawSpecs } from 'react-undraw-illustrations';

class Home extends Component {

  render() {
    return (
      <Fragment>
        <BookShelfDiv>
          <h1>Currently Reading</h1>
          {this.props.currentlyReading.length === 0 
          ? <Fragment>
              <UndrawFilingSystem class="unDraw" />
              <p>Seems like you haven't added any books yet.</p>
            </Fragment>
          : this.props.currentlyReading.map(book => {
            return (
              <Book 
                book={book}
                key={book.id}
                image={book.imageLinks ? book.imageLinks.thumbnail : NoCover}
                author={book.authors ? book.authors[0] : 'Unknown Author'}
                title={book.title}
                id={book.id}
                changeShelves={(shelf) => this.props.changeShelves(book, shelf)}
              />
            )
        })}
        </BookShelfDiv>
        <BookShelfDiv>
          <h1>Want To Read</h1>
          {this.props.wantToRead.length === 0 
          ? <Fragment>
              <UndrawUpvote class="unDraw" />
              <p>Seems like you haven't added any books yet.</p>
            </Fragment>
          : this.props.wantToRead.map(book => {
            return (
              <Book 
                book={book}
                key={book.id}
                image={book.imageLinks ? book.imageLinks.thumbnail : NoCover}
                author={book.authors ? book.authors[0] : 'Unknown Author'}
                title={book.title}
                id={book.id}
                changeShelves={(shelf) => this.props.changeShelves(book, shelf)}
              />
            )
        })}
        </BookShelfDiv>
        <BookShelfDiv>
          <h1>Read</h1>
          {this.props.read.length === 0 
          ? <Fragment>
              <UndrawSpecs class="unDraw" />
              <p>Seems like you haven't added any books yet.</p>
            </Fragment>
          : this.props.read.map(book => {
            return (
              <Book 
                book={book}
                key={book.id}
                image={book.imageLinks ? book.imageLinks.thumbnail : NoCover}
                author={book.authors ? book.authors[0] : 'Unknown Author'}
                title={book.title}
                id={book.id}
                changeShelves={(shelf) => this.props.changeShelves(book, shelf)}
              />
            )
        })}
        </BookShelfDiv>
      </Fragment>
    );
  }
}

export default Home;