import React from "react";
import ReactDOM from "react-dom";
import CoolButton from '../components/Button/Button'
import OtherButton from '../components/Button-other/Button'

class Index extends React.Component{
  render(){
    return 	<div>
    			<div><CoolButton text="My CSS class says that I'm red and I am!" /></div>
    			<div><OtherButton text="My CSS class says that I'm red, but I'm not" /></div>
    		</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));