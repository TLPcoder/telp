import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Main from './components/main'

const App = (props) =>{
  return (
      <Main/>
    );
}

export default connect(({places})=>({places}))(App)
