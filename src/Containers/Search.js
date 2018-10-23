import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Book from '../Containers/Book/Book';
import NoCover from '../assets/images/black.jpg'
import { UndrawBookLover } from 'react-undraw-illustrations';
import  { search } from '../API/BooksAPI';

const WRAPPER = styled.div`
  margin: 0 auto;
  padding: 10rem 5rem;
  width: 81vw;
  border-radius: 15px;
  box-shadow: 0 8px 10px 4px rgba(0, 0, 0, .1);
  background: #F9FCFF;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 5rem;
  grid-row-gap: 20rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10rem;
    padding: 2rem 2rem;
  }
`

const FORM = styled.form`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  input {
    width: 60%;
    border-style: none;
    font-size: 2.5rem;
    padding: 1rem 1rem;
    background: rgba(0, 0, 0, 0);
    border-bottom: 1.5px solid rgba(0, 0, 0, .2);
    transition: all .5s;
    :focus {
      outline: none;
      border-bottom: 3px solid #6B6CF2;
    }
  }
`

const SearchInfo = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  p {
    color: #4A4A58;
    button {
      border: none;
      margin: 0;
      padding: 0;
      background: transparent;
      font-size: 2rem;
      color: #6B6CF2;
      &:hover {
        cursor: pointer;
        color: #6C6DC6;
      }
    }
  }
`

class Search extends Component {
  state = {
    showBooks: false,
    booksFetched: [],
    query: ''
  };
  
  queryBooksHandler = e => {
    const query = e.target.value.trim();
    this.setState( { query } );
    
    if (query) {
      search(query, 20)
      .then(books => {
        books.length > 0
        ? this.setState( { showBooks: true, booksFetched: books } )
        : this.setState( { showBooks: true, booksFetched: [] } );
      });
    } else this.setState( { booksFetched: [], showBooks: false } )
  }


  render() {
    return (
      <Fragment>
        <FORM>
          <input
           value={this.state.query}
           placeholder='Search Your Book'
           onChange={this.queryBooksHandler} />
        </FORM>
        <WRAPPER>
          {
            this.state.showBooks
            ? <Fragment>
              {this.state.booksFetched.map(book => {
                this.props.allBooks.forEach(books => {
                  if (books.id === book.id) {
                    book.shelf = books.shelf;
                  }
                })
                return (
                <Book
                  book={ book }
                  key={book.id}
                  image={book.imageLinks ? book.imageLinks.thumbnail : NoCover}
                  author={book.authors ? book.authors[0] : 'Unknown Author'}
                  title={book.title}
                  id={book.id}
                  changeShelves={(shelf) => this.props.changeShelves(book, shelf)}
                  />
                )
                })}
              </Fragment>
            : <SearchInfo>
                <UndrawBookLover />
                <p>Search for your favorite books.</p>
              </SearchInfo>
          }
        </WRAPPER>
       </Fragment>
    )
  }
}

export default Search;