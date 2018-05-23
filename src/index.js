import React from "react";
import ReactDOM from "react-dom";
import styles from './style.css';

class Letter extends React.Component {
  render() {
    return (
      <div className="letter">
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  <Letter>A</Letter>
  <Letter>E</Letter>
  <Letter>I</Letter>
  <Letter>O</Letter>
  <Letter>U</Letter>
  </div>,
  document.body
);