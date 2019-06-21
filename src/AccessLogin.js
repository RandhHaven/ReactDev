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
        this.state = {
            dbusuarios :[                
            ]
        };
        this.txtUsername = React.createRef();
        this.txtPassword = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.app = firebase.initializeApp(firebaseConfig);
        this.db = this.app.database().ref().child('dbusuarios');
    }

    validations(event)
    {
        this.value = {value: event.target.value};
    }

    handleClick()
    {      
        console.log(this.txtUsername.value);
        this.db.push().set(
            {
                usuUsername: this.txtUsername.value,
                usuPassword: this.txtPassword.value
            }            
        );
        this.txtUsername.value = '';
        this.txtPassword.value = '';
        this.txtUsername.focus();
    }

    componentDidMount(event)
    {
        const {dbusuarios} = this.state;
        if (dbusuarios != null)
        {           
            this.db.on('child_added', snap =>
            {
                dbusuarios.push({
                    usuId: snap.key.value,
                    usuUsername: snap.val().usuUsername,
                    usuPassword: snap.val().usuPassword
                })
                this.setState(dbusuarios);
            });
        }
    }

    onClickRef()
    {
    }

    render()
    {
        return(
            <form>
                <div className="AccessLogin-Form">               
                    <h1>Please enter your username here: </h1>
                    <br/>
                    <label> User or Mail: <input
                        ref ={input => {this.txtUsername = input;}}
                        type="text"/>
                    </label>
                    <br/>
                    <label> Password: <input
                        ref ={input => {this.txtPassword = input;}}
                        input type="password"/>
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