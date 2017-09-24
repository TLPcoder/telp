import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Search from './components/search'

const App = (props) =>{
  return (
      <Search/>
    );
}

export default connect(({places})=>({places}))(App)
