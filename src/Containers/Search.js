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
  grid-row-gap: 15rem;
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
    allBooks: [],
    allBooksQueried: []
  };

  componentDidMount() {
    getAll()
    .then(res => this.setState( {allBooks: res, allBooksQueried: res} ))
    .catch(err => console.log(err));
  };

  showAllBooksHandler = () => {
    this.setState(prevState => {
      return { showBooks: !prevState.showBooks }
    })
  };
  
  queryBooksHandler = (e) => {
    const allBooks = [ ...this.state.allBooks ];
    const value = e.target.value.toLowerCase().trim();
    if (value.length > 0) {
      const queriedBooks = allBooks.filter(book => {
        return book.title.toLowerCase().trim().includes(value);
      });
      this.setState({ 
        showBooks: true,
        allBooksQueried: queriedBooks
      })
    } else {
      this.setState({
        showBooks: false,
        allBooksQueried: this.state.allBooks
      })
    }
  }

  render() {
    return (
      <Fragment>
        <FORM>
          <input
           placeholder='Search Your Book'
           onChange={this.queryBooksHandler} />
        </FORM>
        <WRAPPER>
          {
            this.state.showBooks
            ? <Fragment>
              {this.state.allBooksQueried.map(book => {
                return (
                <Book 
                  image={book.imageLinks.smallThumbnail}
                  key={book.id}
                  description={book.description}
                  title={book.title}
                  />
                )
                })}
                <SearchInfo>
                  <p>
                    <button onClick={this.showAllBooksHandler}>Hide All</button>
                  </p>
                </SearchInfo>
              </Fragment>
            : <SearchInfo>
                <UndrawBookLover />
                <p>Search for your favorite books or click to <button onClick={this.showAllBooksHandler} >Show All</button></p>
              </SearchInfo>
          }
        </WRAPPER>
       </Fragment>
    )
  }
}

export default Search;