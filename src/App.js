import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import BreedPage from './pages/BreedPage/BreedPage';

function App() {
  return (
    <div className="app">
      <header>
        <span className="header-text">Dog-Book</span>
      </header>

      <NavBar/>      

      <HashRouter>
        <Switch>
              <Route exact path="/"><BreedsPage/></Route>
              <Route exact path="/Breeds"><BreedsPage/></Route>
              <Route exact path="/breeds/:breed"><BreedPage /></Route>
              <Route path="*"><NotFoundPage/></Route>
        </Switch>

      </HashRouter>
    </div>
  );
}

export default App;
