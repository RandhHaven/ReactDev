import React, {Component} from 'react';
import './Navigation.css';
import AccesLogin from './AccessLogin.js'
import Home from './Home.js'
import { menus }  from './Menus.json'
import { Router, Switch, Route, Link } from 'react-router';

class Navigation extends Component {
  
  constructor(){
    super();
    this.state = {
      menus
    }
  }

  onChange(event)
  {
    this.setState({value: event.target.value});
  }

  onResponseNavigation(event)
  {
  }
  
  render(){
    console.log(this.state.menus);

    const menus = this.state.menus.map((menu, i) =>{
      return (
        <div className="Nav">
          {menu.description}
        </div>
      )
    })

    return(<form>
        <nav className="Nav">
          <a className="Nav-Orientacion" href="">
            {menus}
          </a>
        </nav>
        <ul className="Nav">
          <li><a className="Nav-Orientacion" href='.\Home.js' onKeyPress={this.onResponseNavigation}>Home</a></li>
          <li><a className="Nav-Orientacion" href="#news">Noticias</a></li>
          <li><a className="Nav-About" href="#contact">Contacto</a></li>
          <li className="Nav-About">
            <a class="Nav-Active" href=".\AccesLogin.js" onKeyPress={this.onResponseNavigation}>Login</a>
          </li>
        </ul>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/AccesLogin' component={AccesLogin} />
        </Switch>
        <br/>
        <Home/>
        </form>
      )
    }  
  }

export default Navigation;