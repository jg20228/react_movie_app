import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Movie from './pages/Movie';
import Nav from './components/Nav';

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
