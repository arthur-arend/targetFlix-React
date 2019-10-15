import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css';
import CategoryListContainer from './components/CategoryList/CategoryListContainer';
import MovieDetailsContainer from './components/MovieDetails/MovieDetailsContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CategoryListContainer} />
          <Route path="/filme/:movieId" component={MovieDetailsContainer} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
