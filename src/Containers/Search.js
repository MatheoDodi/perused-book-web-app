import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getAll } from '../API/BooksAPI';
import Book from '../Containers/Book/Book';
import { UndrawBookLover } from 'react-undraw-illustrations';

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

class Search extends Component {
  state = {
    showBooks: false,
    allBooks: []
  }

  componentDidMount() {
    getAll()
    .then(res => this.setState( {allBooks: res} ))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <FORM>
          <input placeholder='Search Your Book' />
        </FORM>
        <WRAPPER>
          {
            this.state.showBooks
            ? this.state.allBooks.map(book => {
              return (
              <Book 
                image={book.imageLinks.smallThumbnail}
                key={book.id}
                description={book.description}
                title={book.title}
                />
              )
              })
            : <div style={{gridColumn: "1 / 4", textAlign: "center"}}>
                <UndrawBookLover />
                <p>Search for your favorite books or click to <a style={{}}>Show All</a></p>
              </div>
          }
        </WRAPPER>
       </Fragment>
    )
  }
}

export default Search;