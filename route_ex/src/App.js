import React from "react";
import { render } from "react-dom";

import {withRouter} from "react-router";
import {Route, Link} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Users from "./Users";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={};
  }

  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return (
      <div className="App">
        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/About/Jenna">about Jenna로 가기</Link>
          <Link to="/Users">Users로 가기</Link>
        </div>

        <Route exact path="/" component={Home}/>
        <Route path="/About/:About_name" component={About}/>
        <Route path="/Users" component={Users}/>

        <button onclick={() => {
          this.props.history.push('/About/Jenna')
        }}>/About으로 가기</button>
        <button onClick={() => {
          this.props.history.goBack();
        }}>뒤로가기</button>
      </div>
    )
  }
}

export default withRouter(App);