import React, {Component} from 'react';
import './App.css';
import LanguageList from './list/LanguageList'
import DoctypeList from './list/DoctypeList'
import ConfidentialityList from './list/ConfidentialityList'
import MenuList from '@material-ui/core/MenuList';
class App extends Component {

  constructor(){
    super();
    this.state = {
      component:""
    };
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(event){ 
    console.log(event);
    this.setState({component: event.target.name});
  }

render() {
  let toRender = null;
  console.log("render");
  switch(this.state.component)
  {
    case "Language":
    toRender = <LanguageList/>
    break;
    case "Doctype":
    toRender = <DoctypeList/>
    break;
    case "Confidentiality":
    toRender = <ConfidentialityList/>
    break;
  }
  console.log(this.state.component);
  return (
    <div className="App">
          <div>
          <MenuList>
           <button onClick={this.selectComponent} name="Language">Language</button>
           <button onClick={this.selectComponent} name="Doctype" >Doctype</button>
           <button onClick={this.selectComponent} name="Confidentiality" >Confidentiality</button>
        </MenuList>
        </div>
        <div >
           {toRender} 
        </div>
    </div>
  );
}
}
export default App;
