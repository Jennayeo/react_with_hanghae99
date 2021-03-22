import React from "react";
import Nemo from "./nemo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.div = React.createRef();
  }

  hoverEvent = (e) => {
   console.log(e);
   console.log(e.target); 

   e.target.style.backgroundColor = "#eee";
  }

  componentDidMount(){ //돔생성
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount(){ //항상 등록됐으면 해제도 되어야하기 때문에
    this.div.current.removeEventListener("mouseover", this.hoverEvent);
  }



  // addNemo = () => {
  //   this.setState({count: this.state.count + 1});
  // }

  // removeNemo = () => {
  // if(this.state.count > 0){
  //   this.setState({count: this.state.count - 1});
  // }else{
  //   window.alert('no more nemo!')
  // }}

  render() {
    // const nemo_count = Array.from({ length: this.state.count }, (v, i) => (i));
    // console.log(nemo_count)
    return (
      <div className="App" ref={this.div}>
        <Nemo/>

      </div>
    )
  }
}


export default App;
