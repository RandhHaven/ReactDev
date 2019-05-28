import React, {Component} from 'react'; 
import './AccessLogin.css';
//import AddContact from './AddContact.js'
import firebase from 'firebase'
import {firebaseConfig} from './config/db_config.js'
import 'firebase/database'

class AccessLogin extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {email: 'Inicio'};
        this.accessLogin = firebase.initializeApp(firebaseConfig);
    }

    validations(event)
    {
        this.value = {value: event.target.value};
    }

    handleClick()
    {
         alert('Usuario Logueado'); 
    }

    onClickRef()
    {}

    render()
    {
        return(
            <form>
                <div className="AccessLogin-Form">               
                    <h1>Please enter your username here: </h1>
                    <br/>
                    <label> User or Mail: <input type="text"/>
                    </label>
                    <br/>
                    <label> Password: <input type="password"/>
                    </label>
                    <br/>                    
                    <a href="" onClick={this.onClickRef}>He olvidado mi contraseña</a>
                    <br/>
                    <br/>                    
                    <button className="btn btn-success center-block" type="button" onClick={this.handleClick}>Login</button>
                </div>            
            </form>
        );
    }
}

export default AccessLogin;