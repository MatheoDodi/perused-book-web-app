import React, { Component, Fragment } from 'react';
import { Form, SearchWrapper, SearchInfo } from '../Styles/Styles';
import Book from '../Containers/Book/Book';
import NoCover from '../assets/images/black.jpg'
import { UndrawBookLover } from 'react-undraw-illustrations';
import  { search } from '../API/BooksAPI';


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
        <Form onSubmit={(e) => e.preventDefault()}>
          <input
           value={this.state.query}
           placeholder='Search Your Book'
           onChange={this.queryBooksHandler} />
        </Form>
        <SearchWrapper>
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
        </SearchWrapper>
       </Fragment>
    )
  }
}

export default Search;