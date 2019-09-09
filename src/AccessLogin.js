import React, {Component} from 'react'; 
import './AccessLogin.css';
import AddContact from './AddContact.js'
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
            ],
            nombreUsu : '',
            passwordUsu: ''
        };
        this.txtUsername = React.createRef();
        this.txtPassword = React.createRef();
        this.app = firebase.initializeApp(firebaseConfig);
        this.db = this.app.database().ref().child('dbusuarios');
        this.onChange = this.onChange.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onLoginInBase()
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

    IsOkLogin(){
        return true;
    }

    validUser(event){
        //console.log('nombre:' + event.val().usuUsername);
        if (event.val().usuUsername === this.txtUsername.value && event.val().usuPassword === this.txtPassword.value){
            console.log('Usuario Logueado');
        }
        else{
            console.log('Error de inicio de sesion.');
        }
    }

    onClickLogin(event){
        try {
            let namesUsu = this.state.nombreUsu;
            let namePass = this.state.passwordUsu;
            let encontrado = false;
            let dbusuariosLog = this.db;
            if (dbusuariosLog != null){
                dbusuariosLog.on("value", function(usu) {
                    let usuarios = usu.val();                   
                    for (let ele in usuarios) {                        
                        if (usuarios[ele].usuUsername === namesUsu && usuarios[ele].usuPassword === namePass){
                            encontrado = true;
                        }                       
                    }                    
                }, function (errorObject) {
                console.log("Error de inicio de session: " + errorObject.code);
                });                      
            }
            if (encontrado){
                console.log('Usuario Logueado');
                return <AddContact />;
            }
            else{
                console.log('Error de inicio de sesion.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount(event)
    {
        const { dbusuarios } = this.state;
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

    onChange(event){
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    onclickRegister()
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
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label> User or Mail: </label>
                                        </div>
                                        <div class="col-md-8">  
                                            <input name="nombreUsu" type="text" class="form-control"
                                             value={this.state.nombreUsu} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="form-group">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label> Password: </label>
                                        </div>
                                        <div class="col-md-8">  
                                            <input name="passwordUsu" type="password" class="form-control"
                                             value={this.state.passwordUsu} onChange={this.onChange}/>
                                        </div>
                                    </div>                                   
                                </div>
                                <div>
                                    <a href="" onclick={this.onclickRegister}> No account? Create one!</a>
                                </div>
                                <div className="form-group">
                                    <a href="" onClick={this.onClickRef}>He olvidado mi contraseña</a>  
                                </div>
                                <button className="btn btn-primary center-block mx-auto" type="button" onClick={this.onClickLogin}>Login</button>
                                <label id="lblMenaje"  value=""/>                                    
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