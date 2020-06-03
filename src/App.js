import React, { Component } from 'react';
import Detail from './components/Detail'
// import Login from './components/ind'
import Card from './components/Card'
import Tabl from './components/Tabl'
import './App.css';


class App extends Component  {
  render() {
  return (
    <div>
   
    <Detail />
<Tabl />
    <Card />
    </div>
       
  //  <Login />
  )
}
}
export default App;
