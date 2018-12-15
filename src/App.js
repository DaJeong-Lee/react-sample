import React, { Component } from 'react';
import {PostContainer} from './containers';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="content-size">
        <PostContainer/>
      </div>
    );
  }
}

export default App;
