import React, { Component } from 'react';
import './App.css';
import Validation from './Assignment 2/Validation';
import CharComponent from './Assignment 2/CharComponent';

class App extends Component {
    state = {
      text: "",
      textLength: 0
    }

  inputLengthHandler = (e) => {
    this.setState({
      text: e.target.value,
      textLength: e.target.value.length
    });
  }

  deleteCharHandler = (i) => {
    const charArr = this.state.text.split('');
    charArr.splice(i, 1);
    const newText = charArr.join('');
    this.setState({
      text: newText,
      textLength: newText.length
    });
  }

  render() {
    const charArr = this.state.text.split('');
    const charList = charArr.map((char, index) => {
      return (
        <CharComponent
          click={this.deleteCharHandler.bind(this, index)}
          text={char}
          key={"chrcmp_" + index}
        />
      )
    });

    return (
      <div className="App">
        <input
          value={this.state.text}
          onChange={this.inputLengthHandler}
          type="text"
        />
        <p>{this.state.textLength}</p>
        <Validation textLength={this.state.textLength}/>
        {charList}
      </div>
    );
  }
}

export default App;
