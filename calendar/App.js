import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


// import "./style.css";
import { render } from "react-dom";

import AddPlan from "./AddPlan"
import Main from "./Main"

function App() {

  return (
    <div className="App">
      
      <h1 className="title"> Calender </h1>
      <Route exact path="/" component={Main} />
      <Route path="/AddPlan" component={AddPlan} />
      {/* 컴포넌트를 넣어줍니다. */}
    </div>
  );
}

export default App;
