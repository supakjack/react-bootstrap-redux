import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      data: 0
    };
  }

  addData = () => {
    this.setState({ data: this.state.data + 1 });
  };

  render() {
    return (
      <div>
        <p>ข้อมูลปัจจุบัน : {this.state.data}</p>
        <button onClick={this.addData}>คลิก</button>
      </div>
    );
  }
}

export default App;
