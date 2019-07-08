import React, { Component } from 'react';
import './AddContact.css'

class AddContact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            surname: '',
            mail: '',
            mailConfirm: '',
            country: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    handleAddContact(event) {
        console.log(this.state);
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
        //console.log
       
    }
    
    onChange(event){
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    render(){
        return(
            <div class="container">
                <div class="row pt-2">
                    <div class="col-md-2"/>
                    <div class="col-md-8">
                        <div class="card">
                            <div className="card-header">
                                <h4> Add Contact </h4> 
                            </div>
                            <form id="login-form" class="card-body" onSubmit={this.handleAddContact}> 
                                <div class="form-group">
                                    <div class="row pt-2">                                        
                                        <div class="col-md-2">
                                            <label> User: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="user" type="text" class="form-control"
                                            value={this.state.user} onChange={this.onChange}/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Password: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="password" type="password" class="form-control"
                                            value={this.state.password} onChange={this.onChange}/>
                                        </div>                                    
                                    </div>
                                    <div class="row pt-2">                                        
                                        <div class="col-md-2">
                                            <label> Name: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="username" type="text" class="form-control"
                                            value={this.state.username} onChange={this.onChange}/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Surname: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="surname" type="text" class="form-control"
                                            value={this.state.surname} onChange={this.onChange}/>
                                        </div>                                        
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label> Mail: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="mail" type="text" class="form-control"
                                            value={this.state.mail} onChange={this.onChange}/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Confirm Mail: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="mailConfirm" type="text" class="form-control"
                                            value={this.state.mailConfirm} onChange={this.onChange}/>
                                        </div>         
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label>Country: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <select name="selectCountry" value={this.state.country} class="form-control" onChange={this.onChange}>
                                                <option value="#Argentina">Argentina</option>
                                                <option value="#Brasil">Brasil</option>
                                                <option value="#Alemania">Alemania</option>
                                                <option value="#Peru">Peru</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Administrator:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input id="isAdministrator" name="isAdministrator" type="checkbox"/>
                                        </div>                                        
                                    </div>
                                </div>
                                <input className="btn btn-primary center-block" type="submit" value="Submit" />
                            </form>
                            
                        </div>
                    </div>
                    <div class="col-md-2"/>                    
                </div>
            </div>
        )
    };
}

export default AddContact;