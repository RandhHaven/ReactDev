import React, {Component} from 'react';
import './Navigation.css';
import AccesLogin from './AccessLogin.js';
import Home from './Home.js';
import Contact from './AddContact.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Navigation extends Component {

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onResponseNavigation(event) {
  }
  
  render(){
    return(
      <form>
        <nav className="Nav">
          <ul className="Nav-Menu">
            <li><a className="Nav-Orientacion" href='\Home'>Home</a></li>
            <li><a className="Nav-Orientacion" href="#news">News</a></li>
            <li><a className="Nav-Orientacion" href="\Contact">Contact</a>
              <ul className="Nav-Submenu">
                <li><a href="#">Servicio #1</a></li>
                <li><a href="#">Servicio #2</a></li>
                <li><a href="#">Servicio #3</a></li>
              </ul>
            </li>
            <li className="Nav-About">
              <a className="Nav-Active" href="\AccesLogin">Login</a>
            </li>
          </ul>
        </nav>
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