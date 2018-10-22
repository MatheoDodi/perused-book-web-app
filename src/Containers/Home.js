import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { UndrawProductTour } from  'react-undraw-illustrations';
import Book from './Book/Book';

const BookShelfDiv = styled.div`
  margin: 0 auto 2.5rem auto;
  padding: 4rem 5rem 10rem 5rem;
  width: 81vw;
  border-radius: 15px;
  box-shadow: 0 8px 10px 4px rgba(0, 0, 0, .1);
  background: #F9FCFF;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 5rem;
  grid-row-gap: 15rem;
  .test {
    grid-column: 1 / 4;
    width: 100%;
  }
  h1 {
    color: #6B6CF2;
    font-weight: normal;
  }
  hr {
  }
`

class Home extends Component {
  state = {
    currReading: [],
    haveRead: [],
    willRead: []
  }

  render() {
    const { allBooks } = this.props;

    return (
      <Fragment>
        <BookShelfDiv>
          <div className="test">
            <h1>Currently Reading</h1>
          </div>
            {allBooks.map(book => {
                return (
                <Book 
                  image={book.imageLinks.smallThumbnail}
                  key={book.id}
                  description={book.description}
                  title={book.title}
                  />
                )
                })}
        </BookShelfDiv>
        <BookShelfDiv>
          <UndrawProductTour />
        </BookShelfDiv>
        <BookShelfDiv>

        </BookShelfDiv>
      </Fragment>
    );
  }
}

export default Home;