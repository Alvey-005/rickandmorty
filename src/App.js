import React from 'react';
import {Switch,Route} from 'react-router-dom'

import CharacterList from './component/character-list/character-list.component'
import Character from './component/character/character.component'
import NavBar from './component/navbar/navbar.component'
import Error404 from './component/error404/error404.component'
import { Router} from 'react-router-dom'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App () {
  return (
    <>
    <NavBar/>
    <Router history = {history}>
      <Switch>
       
        <Route exact path = '/' component={CharacterList}/>  
        <Route
      exact
      path="/charcter/:id"
      component={Character} />
      <Route  component={Error404}/>
        
        
      </Switch>
      </Router>
      </>
    
    
  );

}

export default App;
