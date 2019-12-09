import React, { Component } from 'react';
import './AccessLogin.css';
import AddContact from './AddContact.js'
import firebase from 'firebase'
import { firebaseConfig } from './config/db_config.js'
import 'firebase/database'

class AccessLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbusuarios: [
            ],
            nombreUsu: '',
            passwordUsu: ''
        };
       
        this.onChange = this.onChange.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onLoginInBase = this.onLoginInBase.bind(this);
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(firebaseConfig);
            this.db = this.app.database().ref().child('dbusuarios');
        }
    } 

    onClickLogin(event) {
        try {
            let namesUsu = this.state.nombreUsu;
            let namePass = this.state.passwordUsu;
            let encontrado = false;
            let dbusuariosLog = this.db;
            if (dbusuariosLog != null) {
                dbusuariosLog.on("value", function (usu) {
                    let usuarios = usu.val();
                    for (let ele in usuarios) {
                        if (usuarios[ele].usuUsername === namesUsu && usuarios[ele].usuPassword === namePass) {
                            encontrado = true;
                        }
                    }
                }, function (errorObject) {
                    console.log("Error de inicio de session: " + errorObject.code);
                });
            }
            if (encontrado) {
                console.log('Usuario Logueado');
                return <AddContact />;
            }
            else {
                console.log('Error de inicio de sesion.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    onLoginInBase() {
        console.log(this.state.passwordUsu.value);
        let namesUsu = this.state.nombreUsu;
        let namePass = this.state.passwordUsu;
        this.db.push().set(
            {
                usuUsername: this.state.nombreUsu,
                usuPassword: namePass
            }
        );
        this.state.passwordUsu = '';
        this.state.nombreUsu = '';
        this.state.nombreUsu.focus();
    }

    componentDidMount(event) {
        const { dbusuarios } = this.state;
        if (dbusuarios != null) {
            this.db.on('child_added', snap => {
                dbusuarios.push({
                    usuId: snap.key.value,
                    usuUsername: snap.val().usuUsername,
                    usuPassword: snap.val().usuPassword
                })
                this.setState(dbusuarios);
            });
        }
    }

    onClickRef() {
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onclickRegister() {
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-4" />
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h4> LOGIN </h4>
                            </div>
                            <form id="login-form" className="card-body">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label> User or Mail: </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input name="nombreUsu" type="text" className="form-control"
                                                value={this.state.nombreUsu} onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label> Password: </label>
                                        </div>
                                        <div className="col-md-8">
                                            <input name="passwordUsu" type="password" className="form-control"
                                                value={this.state.passwordUsu} onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="#" onclick={this.onclickRegister}> Create account</a>
                                </div>
                                <div className="form-group">
                                    <a href="#" onClick={this.onClickRef}>Forget your password</a>
                                </div>
                                <button className="btn btn-primary center-block mx-auto" type="button" onClick={this.onLoginInBase}>Login</button>
                                <label id="lblMenaje" value="" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        );
    }
}

export default AccessLogin;