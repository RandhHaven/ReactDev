import React, {Component} from 'react';
import './Navigation.css';
import AccesLogin from './AccessLogin.js';
import Home from './Home.js';
import Contact from './AddContact.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Navigation extends Component {  
 
  onChange(event)
  {
    this.setState({value: event.target.value});
  }

  onResponseNavigation(event)
  {
  }
  
  render(){
    return(
      <form>
        <ul className="Nav">
          <li><a className="Nav-Orientacion" href='\Home'>Home</a></li>
          <li><a className="Nav-Orientacion" href="#news">News</a></li>
          <li><a className="Nav-Orientacion" href="\Contact">Contact</a></li>
          <li className="Nav-About">
            <a class="Nav-Active" href="\AccesLogin">Login</a>
          </li>
        </ul>
        <BrowserRouter>
          <Switch>
            <Route path='/Home' component={Home} />
            <Route path='/Contact' component={Contact} />
            <Route path='/AccesLogin' component={AccesLogin} />
          </Switch>
        </BrowserRouter>
      </form>
    )
  }  
}

export default Navigation;