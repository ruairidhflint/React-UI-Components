import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const headerContent = {
  imageLinkURl: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
  header: "Lambda School",
  subheader: "@LambdaSchool 27th May 2019",
  text: "Let's learn React by building simple interfaces with components. Don't try to overthing it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way tomastering React"
}

const cardContent = {
  imageLinkURl: "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
  header: "Get Started with React",
  text: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
  link: "http://reactjs.org"
}



const App = () => {
  return (
    <div className="main-body">
      <HeaderContainer one={headerContent.imageLinkURl} two={headerContent.header} three={headerContent.subheader} four={headerContent.text} />
      <CardContainer one={cardContent.imageLinkURl} two={cardContent.header} three={cardContent.text} four={cardContent.link} />
    </div>

  );  
};

export default App;
