import React,{Component} from "react";
import ReactDOM from "react-dom";

import "./styles.css";
let people =[
  {
    id:1,
    firstName:"Raja",
    lastName:"Yadav"
  },
  {
    id: 2,
    firstName: "Sagar",
    lastName: "Jaiswal"
  },
  {
    id: 3,
    firstName: "Tejas",
    lastName: "Mishra"
  },
  {
    id: 4,
    firstName: "Kunal",
    lastName: "Jain"
  },
  {
    id: 5,
    firstName: "Kailash",
    lastName: "Jain"
  },
  {
    id: 6,
    firstName: "Aditi",
    lastName: "Jain"
  },
  {
    id: 7,
    firstName: "Akshay",
    lastName: "Kumar"
  }
]

function searchingFor(term){
  return function(list){
    return list.firstName.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      people:people,
      term:"",
    }
  }
  searchHandler=(event)=>{
    this.setState({term:event.target.value})
  }
  render(){
    return (
      <div className="App">
        <h1>CONTENT FILTER APP</h1>
        <form>
        <input type="text" placeholder="Search"
          onChange={this.searchHandler}/>
          </form>
      {this.state.people.filter(searchingFor(this.state.term)).map(person =>{
        return (
          <div key={person.id}>
            <h2>{person.firstName} {person.lastName}</h2>
          </div>
        )
      })}
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
