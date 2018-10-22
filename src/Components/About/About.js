import React from 'react';
import styled from 'styled-components';
import { UndrawBibliophile, UndrawSearch, UndrawOnline } from 'react-undraw-illustrations';

const WRAPPER = styled.div`
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
  span {
    font-weight: bold;
    color: #6B6CF2;
  }
  p {
    color: rgb(80, 80, 80);
  }
`

const About = () => {
  return (
    <WRAPPER>
      <UndrawBibliophile />
      <p><span>Peruse</span> is a Web App that helps you keep track of your books. Not only the ones you own, but the ones you're thinking of getting, as well.</p>
      <p>You can search the book you're interested in, and you can add it to your <em>Currently Reading</em>, <em>Will Read</em>, or <em>Already Read</em> collection.</p>
      <UndrawSearch />
      <UndrawOnline />
      <p>You can access your collections anywhere, anytime. Future updates will be implementing the ability to share the book you're currently reading with all you Social Media buddies!</p>
    </WRAPPER>
  )
}

export default About;