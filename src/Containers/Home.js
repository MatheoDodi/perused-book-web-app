import React, { Component, Fragment } from 'react';
import { BookShelfDiv } from '../Styles/Styles';
import Book from './Book/Book';
import { UndrawFilingSystem, UndrawUpvote, UndrawSpecs } from 'react-undraw-illustrations';

class Home extends Component {

  render() {
    const infoPar = <p>Seems like you haven't added any books yet.</p>

    return (
      <Fragment>
        <BookShelfDiv>
          <h1>Currently Reading</h1>
          {this.props.currentlyReading.length === 0 
          ? <Fragment>
              <UndrawFilingSystem class="unDraw" />
              {infoPar}
            </Fragment>
          : this.props.currentlyReading.map(book => {
            return (
              <Book 
                {...book}
                key={book.id}
                changeShelves={(shelf, path) => this.props.changeShelves(book, shelf, path)}
              />
            )
        })}
        </BookShelfDiv>
        <BookShelfDiv>
          <h1>Want To Read</h1>
          {this.props.wantToRead.length === 0 
          ? <Fragment>
              <UndrawUpvote class="unDraw" />
              {infoPar}
            </Fragment>
          : this.props.wantToRead.map(book => {
            return (
              <Book 
                {...book}
                key={book.id}
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
              {infoPar}
            </Fragment>
          : this.props.read.map(book => {
            return (
              <Book 
                {...book}
                key={book.id}
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