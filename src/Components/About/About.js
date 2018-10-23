import React from 'react';
import { UndrawBibliophile, UndrawSearch, UndrawOnline } from 'react-undraw-illustrations';
import { AboutWrapper } from '../../Styles/Styles';

const About = () => {
  return (
    <AboutWrapper>
      <UndrawBibliophile />
      <p><span>Peruse</span> is a Web App that helps you keep track of your books. Not only the ones you own, but the ones you're thinking of getting, as well.</p>
      <p>You can search the book you're interested in, and you can add it to your <em>Currently Reading</em>, <em>Will Read</em>, or <em>Already Read</em> collection.</p>
      <UndrawSearch class="search"/>
      <UndrawOnline />
      <p>You can access your collections anywhere, anytime. Future updates will be implementing the ability to share the book you're currently reading with all you Social Media buddies!</p>
    </AboutWrapper>
  )
}

export default About;