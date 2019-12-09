import React, { Component } from 'react';
import './AddContact.css'
import DataGrid from './DataGrid.js';
import firebase from 'firebase'
import { firebaseConfig } from './config/db_config.js'
import 'firebase/database'
import AccessLogin from './AccessLogin';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbContacts: [
            ],
            userNick: '',
            username: '',
            userLastName: '',
            cellphone: '',           
            mail: '',
            birthdate: '',
            country: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.isNumberKey = this.isNumberKey.bind(this);
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(firebaseConfig);
            this.db = this.app.database().ref().child('dbContacts');
        }        
    }

    handleAddContact(event) {                
        this.db.push().set({
            userNickDb: this.state.userNick,
            userUserName: this.state.username,
            userLastNameDb: this.state.userLastName,
            userCellPhoneDb: this.state.cellphone,            
            userMailDb: this.state.mail,
            userBirthdateDb: this.state.birthdate,
            userCountryDb: this.state.country
        });
        event.preventDefault();
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidMount(event){
        const { dbContacts } = this.state;
        if (dbContacts != null) {
            this.db.on('child_added', snap => {
                dbContacts.push({
                    userId: snap.key.value,
                    userDb: snap.val().userDb,
                    userNameDb: snap.val().userNameDb,
                    userLastNameDb: snap.val().userLastNameDb,
                    userCellPhoneDb: snap.val().userCellPhoneDb,
                    userMailDb: snap.val().userMailDb,
                    userBirthdateDb: snap.val().userBirthdateDb,
                    userCountryDb: snap.val().userCountryDb
                })
                this.setState(dbContacts);
            });
        }
    }

    isNumberKey(evt) {
        var valor = false;
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode > 48 || charCode < 57)) {
            alert(charCode + 'Retorna True');
            valor = true;
        }
        alert(charCode + 'Retorna False');
        return valor;
    }

    onClickBack() {
        return (<AccessLogin/>);
    }

    render() {
        return (
            <div class="container">
                <div class="row pt-2">
                    <div class="col-md-2" />
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">
                                <h4> Add Contact </h4>
                            </div>
                            <form id="login-form" className="card-body" onSubmit={this.handleAddContact}>
                                <div class="form-group">
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label> User: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="userNick" type="text" class="form-control"
                                                value={this.state.userNick} onChange={this.onChange} />
                                        </div>
                                        <div class="col-md-2">
                                            <label> Cell Phone: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="cellphone" type="number" min="0" step="1" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control"
                                                value={this.state.cellphone} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label> Name: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="username" type="text" class="form-control"
                                                value={this.state.userName} onChange={this.onChange} />
                                        </div>
                                        <div class="col-md-2">
                                            <label> Surname: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="userLastName" type="text" class="form-control"
                                                value={this.state.userLastName} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label> Mail: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="mail" type="text" class="form-control"
                                                value={this.state.mail} onChange={this.onChange} />
                                        </div>
                                        <div class="col-md-2">
                                            <label> Birthdate: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="birthdate" type="date" class="form-control"
                                                value={this.state.birthdate} onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label>Country: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <select name="country" value={this.state.country} class="form-control" onChange={this.onChange}>
                                                <option value="#Argentina">Argentina</option>
                                                <option value="#Brasil">Brasil</option>
                                                <option value="#Alemania">Alemania</option>
                                                <option value="#Peru">Peru</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Genero: </label>
                                        </div>
                                        <div class="col-md-4 radio">
                                            <label>Masculino<input name="isGenero" value="M" type="radio" checked={true} /></label>
                                            <label>Femenino<input name="isGenero" value="F" type="radio" /></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row pt-2">
                                    <div class="col-md-1" />
                                    <div class="col-md-4">
                                        <input class="btn btn-primary" type="submit" value="Add"/>
                                    </div>
                                    <div class="col-md-1" />
                                    <div class="col-md-4">
                                        <button class="btn btn-danger" type="button" name="Back" onClick={this.onClickBack}> Back </button>
                                    </div>
                                    <div class="col-md-2" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-2" />
                </div>
                <div class="row pt-2">
                    <DataGrid />
                </div>
            </div>
        )
    };
}

export default AddContact;