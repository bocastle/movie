import React, { Component } from 'react';
import MyComponent from './components/myComponent'; // 컴포넌트 import
import Movies from './components/movies';
// import logo from './logo.svg';
import './App.css';
// import { render } from 'react-dom';



/* function Food(props){
  console.log(props);
  return(
    <h1>props.name</h1>
  );
}

function Person({hwiba}){
  return <h1>Person {hwiba}</h1>;
}

function App(){
  return(
    <div>
      <Food name="kimchi" />
      <Person name="hwiba" />
    </div>
  );
}  */

//현재 count에 +1 해주기
/* 
add1 = () => {
  this.setState({count: this.state.count+1});
};

add2 = () => {
  this.setState(current => ({ count: current.count + 1 }));
}
 */
/* constructor(props){
  super(props);
  console.log("construtor hello");
}

componentDidMount(){
  console.log("componentDidMount hello");
}
render(){
  console.log("render hello");
  return(
    <div>
      <h1>first object's data1 : {this.state.count}</h1>
      <button onClick={this.add1}>add1</button>
      <button onClick={this.minus}>minus</button>
    </div>);
  }
}
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent /> {/* 컴포넌트 배치 */}
        <Movies />
      </div>
    )
  }
}

export default App;


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          보캐슬 <code>출근 </code> 에러를 잡아라.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

export default App;
*/
