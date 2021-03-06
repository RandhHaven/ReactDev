import React, { Component } from 'react';
import { menus } from './Menus.json';
import './Menu.css'

class Menu extends Component{

    constructor(){
        super();
        this.state = {menus}
    }

    render(){
        const menus = this.state.menus.map((menu, i) =>{
            return (
              <div className="Nav">
                <li>
                  {menu.description}
                </li>
              </div>)
            }
        )

        return(
            <form>
              <ul className="Nav">
                <a className="Nav-Orientacion" href="">
                  { menus }
                </a>
              </ul>
              </form>
        )
    }
}


export default Menu;
