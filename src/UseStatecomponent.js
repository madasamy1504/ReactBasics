import React,{useState} from "react";
export default function UseStatecomponent(props){
    const[student,setvalue]=useState({
        c:"madasamy",
        d:26,
        e:"B.E"
    })
    
    const a = ()=>{
       setvalue({...student,c:"magesh"});
    }
    return(
        <div>from UseStatecomponent{student.c}
        <button onClick={()=>{a()}}>click me{student[0]}</button>
        <div>{student.native}</div>

        <div>UseStatecomponentwithArray <UseStatecomponentwithArray/></div>
        
        <StateinClass/>
        </div>
    )
}


function UseStatecomponentwithArray(){

    const[containNumber,Setstate]=useState([1,2,3]);
    let a=()=>{
        containNumber[0]= containNumber[0]+1;
        Setstate([...containNumber]);
        console.log(containNumber);
    }
    return(
        <div><button onClick={()=>{a()}}>btn</button></div>
    )
}


class StateinClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

a(){
    this.setState((previousstate)=>({count:previousstate.count+1}),()=>{console.log(this.state.count)})
}
render(){
    return(
        <div>
            <div>Hi I am from class</div>
            <button onClick={()=>{this.a()}}>click me{this.state.count}</button>
        </div>
    )
}



}

















