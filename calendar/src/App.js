import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import MainPage from "./MainPage";
// import Quiz from "./Quiz";
// import Score from "./Score";

// function MyApp() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       {/* <Calendar
//         onChange={onChange}
//         value={value}
//       /> */}
//       <MainPage></MainPage>
//     </div>
//   );
// }

// export default MyApp;

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page: "MainPage"
    };
  }

  render () {
    return (
      <div className="App">
        {this.state.page === "MainPage"}

        {/* <Start name={this.state.name}/> */}
        {/* <Quiz/> */}
      </div>
    );
  }
}

export default App;

