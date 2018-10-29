import React, { Component } from 'react';
import './App.css';
import UserOutput from './Assignment 1/UserOutput';
import UserInput from './Assignment 1/UserInput';

class App extends Component {
  state = {
    username: "Ophelia"
  }

  switchNameHandler = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.username} changed={this.switchNameHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput username="Max" />
        <UserOutput username="Frederik" />
      </div>
    );
  }
}

export default App;
