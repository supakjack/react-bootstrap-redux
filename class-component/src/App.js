import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      data: 0
    };
  }

  render() {
    return (
      <div>
        <p>ข้อมูลปัจจุบัน : {this.state.data}</p>
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          คลิก
        </button>
      </div>
    );
  }
}

export default App;
