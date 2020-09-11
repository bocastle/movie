import React, { Component } from 'react';
//import MyComponent from './components/myComponent'; // 컴포넌트 import

class MyComponent extends Component { //class와 export는 동일하게 해줘야한다.
  constructor(props){ //선언을 해주는거고
    super(props);
    console.log("construtor hello");
      this.state = {
        count : 0 //변수명과 초기값을 넣어준다
      };
    };

    add = () => {
      this.setState({count: this.state.count+1});
    };
    
    add2 = () => {
      // this.setState(current => ({ count: current.count + 1 }));
      this.setState(({ count: this.state.count + 1 }));
      // this.setState({count: 5});
    }

    // const add2 = () => {}
    // add2 () => {}
    // function add2() {}

    minus = () => {
      this.setState(current => ({ count: current.count - 1}));
    }
      componentDidMount(){
        console.log("componentDidMount hello");
      }

      componentDidUpdate(){
        console.log("I just updated");
      }
      render(){
        console.log("render hello");
        return(
          <div>
            <h1>first object's data1 : {this.state.count}</h1>
            <button onClick={this.add}>add</button>
            <button onClick={this.add2}>add2</button>
            <button onClick={this.minus}>minus</button>
          </div>);
        }
      }

export default MyComponent;