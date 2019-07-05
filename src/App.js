import React, { Component } from 'react';
import './App.css';
import Data from './Data'

class App extends Component {
  render() {
    return (
     <div className="main">
      <div className="title">   
        <h1>{Data.title}</h1>
      </div>

      <div className="title">  
        <h2>{Data.subTitle}</h2>
      </div>

      <div className="img-div"  >
        <img className="image" src={Data.image} alt="Peaceful Servant"/>
      </div>

      <div>
        <h2>{Data.miniBio}</h2>
      </div>

      <div>
        <p>{Data.qoute}</p> 
      </div>

      <div>
        <p>Learn more at <a href = {Data.websiteURL} target = "blank" >{Data.website}</a> </p>
      </div> 

    </div>
  );
}
}

export default App;
