import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer.js';
import moment from "moment";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faComment);
library.add(faRetweet);
library.add(faHeart);
library.add(faEnvelope);

const textVar = "Let's learn React by building simple interfaces with components. Don't try to overthing it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way tomastering React";
const theDate = moment().format("MMM Do YY");  


const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer imgLink='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
       mainHeader="Lambda School" subHeader="@LambdaSchool" subDate={theDate} headerText={textVar}/>
       <CardContainer cardImageURL="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
       cardTitle="Get Started with React" cardText="React makes it painless to create interactive UIs. Design simple views for each state in your application."
       cardURL="reactjs.org"/>
       <Footer />
    </div>
  );
};

export default App;
