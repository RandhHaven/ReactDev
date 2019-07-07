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
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-4"/>
                    <div class="col-md-4">
                    <div class="card">
                            <div class="card-header">
                                <h4> LOGIN </h4> 
                            </div>
                            <form id="login-form" class="card-body">                                                 
                                <div className="form-group">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label> User or Mail: </label>
                                            </div>
                                        <div class="col-md-8">  
                                        <input
                                            ref ={input => {this.txtUsername = input;}}
                                            type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="form-group">
                                <div class="row">
                                        <div class="col-md-4">
                                            <label> Password: </label>
                                            </div>
                                        <div class="col-md-8">  
                                        <input
                                        ref ={input => {this.txtPassword = input;}}
                                        input type="password" class="form-control"/>
                                        </div>
                                    </div>                                   
                                </div>
                                <div>
                                    <a href="" onclick={this.onclickRegeister}> No account? Create one!</a>
                                </div>
                                <div className="form-group">
                                    <a href="" onClick={this.onClickRef}>He olvidado mi contraseña</a>  
                                </div>
                                <button className="btn btn-primary center-block" type="button" onClick={this.handleClick}>Login</button>                                        
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4"/>
                </div>
            </div>            
        );
    }
}

export default AccessLogin;