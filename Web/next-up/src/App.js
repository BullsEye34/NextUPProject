import React from 'react';
import './App.css';
import Result from './result'
import Home from './home'
import { Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/result" component={Result}></Route>
    </div>
  );
}


export default App;
