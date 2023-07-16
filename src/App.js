import logo from './logo.svg';
import './App.css';
import data from "./data.json";
import UseStatecomponent,{a} from './UseStatecomponent';
import React from 'react';
function App() {

//   const getData = (param)=>{
//     console.log(param);
//   }
// data.map((item,index)=>{console.log(index,item.name)})
//   const cart = data.map((item,index) => (<div key={index}><button key={index} onClick={()=>{}}>btn for {item.name}</button></div>));
// console.log(data);
var d = "hi"
var c = (param)=>{
  d = param;
// console.log(param);
return "I am c"
}
  return (
    <div className="App">
     
      
      {/* <div style={{display:"flex"}}>{cart}</div> */}
      {d}
      <UseStatecomponent name={c} />
      <Classcomponent1 name={c}/>
    </div>
  );
}


class Classcomponent1 extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  print(){
     this.setState((prev)=>({count:prev.count + 1}),()=>{console.log(this.state.count);})
    }
    fiveprint(){
      this.print();
      this.print();
      this.print();
      this.print();
      this.print();
    }
  render(){
    return(
      <div>Hello from classcomponent1 
        {this.props.name("Hello I am from Classcomponent1")}
        <button onClick={()=>{this.fiveprint()}}>btn{this.state.count}</button>
        <img src={logo} className='App-logo' />
        </div>
    )
  }
}


export default App;
