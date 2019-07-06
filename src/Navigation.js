import React, {Component} from 'react';
import './Navigation.css';
import AccesLogin from './AccessLogin.js'
import Home from './Home.js'
import AddContact from './AddContact.js'
import { menus }  from './Menus.json'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
    const menus = this.state.menus.map((menu, i) =>{
    return (
      <div className="Nav">
        <li>
          {menu.description}
        </li>
        
      </div>
    )
  })

    return(
        <form>
          <ul class="Container">
            <a className="Nav-Orientacion" href="">
              { menus }
            </a>
          </ul>
       
          <ul className="Nav">
            <li><a className="Nav-Orientacion" href='\Home'>Home</a></li>
            <li><a className="Nav-Orientacion" href="#news">News</a></li>
            <li><a className="Nav-Orientacion" href="\AddContact">Contact</a></li>
            <li className="Nav-About">
              <a class="Nav-Active" href="\AccesLogin">Login</a>
            </li>
          </ul>
          <BrowserRouter>
            <Switch>
              <Route path='/Home' component={Home} />
              <Route path='/AddContact' component={AddContact} />
              <Route path='/AccesLogin' component={AccesLogin} />
            </Switch>
          </BrowserRouter>
          <Home/>
          <br/>
        </form>
      )
    }  
  }

export default Navigation;