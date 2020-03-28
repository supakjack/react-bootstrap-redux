import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fullname: '' };
    this.fullnameChange = this.fullnameChange.bind(this);
  }

  fullnameChange = e => {
    this.setState({ fullname: e.target.value });
  };

  render() {
    return (
      <div>
        <p>ชื่อ-สกุล {this.state.fullname}</p>
        <input
          type="text"
          value={this.state.fullname}
          onChange={this.fullnameChange}
        />
      </div>
    );
  }
}

export default App;
