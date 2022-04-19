import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './components/pages/MovieList'
import Favorites from './components/pages/Favorites'
import Details from './components/pages/Details'
import './App.css';
import Navbar from './components/pages/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
            <Navbar />
                <Switch>
                    
                    <Route exact path="/" component={ MovieList } />
                    <Route path="/favorites" component={ Favorites } />
                    <Route path="/details" component={ Details } />
                    
                </Switch>
               
           
      </Router>
  );
}

export default App;
