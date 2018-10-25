import React from 'react';
import { UndrawBibliophile, UndrawSearch, UndrawOnline } from 'react-undraw-illustrations';
import { AboutWrapper } from '../../Styles/Styles';

const About = () => {
  return (
    <AboutWrapper>
      <UndrawBibliophile />
      <p><span>Peruse</span> is a Web App that helps you keep track of your books. Not only the ones you own, but the ones you're thinking of getting, as well.</p>
      <p>You can search the book you're interested in, and you can add it to your <em>Currently Reading</em>, <em>Want To Read</em>, or <em>Read</em> collection.</p>
      <UndrawSearch class="search"/>
      <UndrawOnline />
      <p>You can access your collections anywhere, anytime. Future updates will be implementing the ability to share the book you're currently reading with all you Social Media buddies!</p>
      <p style={{fontSize: '1.5rem',gridColumn: '1 / -1', textAlign: 'center'}}>The API used for this project had limited book choices. Once you first visit the Web App you'll notice
      you already have some books already set up in collections for you, but every change made after that will be saved on your Browser's local storage. The complete list of 
      Search Terms is : <br />
      <span style={{display: 'block', color: '#B8B8BF', fontWeight: 'normal', marginTop: '2rem'}}> Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</span></p>
    </AboutWrapper>
  )
}

export default About;