import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import NoCover from '../assets/images/black.jpg';
import Book from './Book/Book';
import { UndrawFilingSystem, UndrawUpvote, UndrawSpecs } from 'react-undraw-illustrations';

const BookShelfDiv = styled.div`
  margin: 0 auto 2.5rem auto;
  padding: 4rem 5rem 10rem 5rem;
  width: 81vw;
  border-radius: 15px;
  box-shadow: 0 8px 10px 4px rgba(0, 0, 0, .1);
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 5rem;
  grid-row-gap: 10rem;
  .unDraw {
    grid-column: 1 / -1;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10rem;
    padding: 2rem 2rem 5rem 2rem;
  }
  h1 {
    justify-self: start;
    grid-column: 1 / 4;
    color: #6B6CF2;
    font-weight: normal;
    @media (max-width: 1000px) {
      grid-column: 1 / 3;
      font-size: 3rem;
    }
  }
  p {
    grid-column: 1 / -1;
  }
`

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