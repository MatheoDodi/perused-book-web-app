import React, { Component, Fragment } from 'react';
import { Form, SearchWrapper, SearchInfo } from '../Styles/Styles';
import Book from '../Containers/Book/Book';
import { UndrawBookLover } from 'react-undraw-illustrations';
import  { search } from '../API/BooksAPI';


class Search extends Component {
  state = {
    showBooks: false,
    booksFetched: [],
    query: '',
  };
  
  queryBooksHandler = e => {
    const query = e.target.value;
    this.setState( { query } );
    
    if (query.trim()) {
      search(query.trim(), 20)
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
                  {...book} 
                  key={book.id}
                  changeShelves={(shelf, path) => this.props.changeShelves(book, shelf, path)}
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