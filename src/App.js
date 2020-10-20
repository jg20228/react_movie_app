import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div>
      <Nav/>
      <Route path="/" exact={true} component={MovieList}/>
      <Route path="/movie" exact={true} component={Movie}/>
      <Route path="/movie/:id" exact={true} component={MovieDetail}/>
    </div>
  );
}

export default App;
