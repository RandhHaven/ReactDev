import React, {Component} from 'react';
import './Navigation.css';
import AccesLogin from './AccessLogin.js'

class Navigation extends Component {

  onChange(event)
  {
    this.setState({value: event.target.value});
  }

  onResponseNavigation(event)
  {
    /*if (event.target.value == 'Login')
    {
      //new render(<AccesLogin/>);
    }*/
    this.setState({value: event.target.value});
  }
  
  render(){
      return(<form>
              <ul className="Nav">
                <li><a className="Nav-Orientacion" href="#home">Home</a></li>
                <li><a className="Nav-Orientacion" href="#news">Noticias</a></li>
                <li><a className="Nav-Orientacion" href="#contact">Contacto</a></li>
                <li className="Nav-About"><a class="Nav-Active" href="#login" onKeyPress={this.onResponseNavigation}>Login</a></li>
              </ul>
              <br/>
              <AccesLogin/>
              </form>
            )      
    }  
  }

export default Navigation;