import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 85px 0 60px 0;
`

export const Navbar = styled.nav`
  height: 67.5px;
  background-color: #F9FCFF;
  width: 100%;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, .1);
  position: fixed;
  z-index: 10;
  @media (max-width: 800px) {
    height: 75px;
  }
  ul {
    list-style: none;
    width: 85%;
    padding: 0 4rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 800px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
      justify-items: center;
    }
    a {
      margin-left: 5rem;
      text-decoration: none;
      @media (max-width: 800px) {
        margin: 0;
      }
    }
    .logo {
      margin-left: 0;
      margin-right: auto;
      font-size: 4rem;
      font-weight: bold;
      color: #6B6CF2;
      @media (max-width: 800px) {
        grid-column: 1 / 4;
        margin: 0;
        font-size: 3rem;
      }
    }
  }
`

export const AboutWrapper = styled.div`
  margin: 0 auto;
  padding: 10rem 5rem;
  width: 81vw;
  border-radius: 15px;
  box-shadow: 0 8px 10px 4px rgba(0, 0, 0, .1);
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 200px;
  grid-column-gap: 2.5rem;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 75px;
    .search {
      grid-row: 3 / 4;
    }
  }
  span {
    font-weight: bold;
    color: #6B6CF2;
  }
  p {
    color: rgb(80, 80, 80);
  }
`

export const SelectWrapper = styled.div`
  width: 90%;
  border-radius: 5px;
  overflow: hidden;
  background: #6A6FEA;
  margin: 1rem;
  box-shadow: -3px 3px 8px rgba(0, 0, 0, .35);
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  select {
  padding: 5px;
  width: 130%;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    }
  }
  select:focus {
  outline: none;
  }
`

export const SearchWrapper = styled.div`
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

export const Form = styled.form`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 2rem 0;
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

export const SearchInfo = styled.div`
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

export const BookCard = styled.div`
  display: grid;
  justify-items: center;
  width: 210px;
  border-radius: 15px;
  height: max-content;
  transition: all .25s;
  &:hover {
      transform: scale(1.085);
      color: #6B6CF2;
  }
  h5 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 1rem;
    span {
      color: gray;
    }
  }
  @media (max-width: 500px) {
    width: 120px;
  }
`

export const BookCover = styled.div`
  background-color: black;
  background: url(${props => props.imageURL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 200px;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, .3);
  transition: all .25s;
  &:hover {
    box-shadow: 0 6px 10px 5px rgba(0 , 0, 0, .15);
  }
  @media (max-width: 500px) {
    height: 160px;
    width: 110px;
  }
  .plus-sign {
    height: 27% !important;
    width: 40% !important;
    margin-left: 1rem;
    transition: all .25s;
    &:hover {
      transform: scale(1.1);

    }
  }
}
`

export const BookShelfDiv = styled.div`
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
    color: #4A4A58;
  }
`