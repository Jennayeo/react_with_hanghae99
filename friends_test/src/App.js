import React from "react";
import logo from './logo.svg';
import './App.css';

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: "너",
      page: "quiz",
      list: [
        {question: "너는 2살이다", answer: "0"},
        {question: "너는 3살이다", answer: "0"},
        {question: "너는 4살이다", answer: "0"},
        {question: "너는 5살이다", answer: "0"},
        {question: "너는 6살이다", answer: "0"}
      ],
      scoreMsg: "우리 오늘부터 베프! 앞으로도 더 친하게 지내요!"
    };
  }

  render () {
    return (
      <div className="App">
        {this.state.page === "quiz" && (<Quiz list = {this.state.list}/>)}
        {this.state.page === "start" && (<Start name={this.state.name}/>)}
        {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}

        {/* <Start name={this.state.name}/> */}
        {/* <Quiz/> */}
      </div>
    );
  }
}

export default App;
