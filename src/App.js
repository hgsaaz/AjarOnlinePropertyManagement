import React from 'react';
import './App.css';
import Home from './App/Pages/Home/Home';

class App extends React.Component {
  
  render(){
    return (
      <div>
        <Home firebase={this.props.firebase}/>
      </div>
    );
  }
}

export default App;
