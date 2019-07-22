import React, { Component } from 'react';
import './AddContact.css'

class AddContact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user: '',
            username: '',            
            cellphone: '',
            surname: '',
            mail: '',
            date: '',
            selectCountry: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    handleAddContact(event) {
        console.log(this.state);
        alert('A name was submitted: ' + this.state.user + ' ' + this.state.cellphone + this.state.username + ' ' + this.state.surname);
        event.preventDefault();
        //console.log       
    }
    
    onChange(event){
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    onClickBack(){
    }

    render(){
        return(
            <div class="container">
                <div class="row pt-2">
                    <div class="col-md-2"/>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">
                                <h4> Add Contact </h4> 
                            </div>
                            <form id="login-form" class="card-body" onSubmit={this.handleAddContact}> 
                                <div class="form-group">
                                    <div class="row pt-2">                                        
                                        <div class="col-md-2">
                                            <label> User: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="user" type="text" class="form-control"
                                            value={this.state.user} onChange={this.onChange}/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Cell Phone: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="cellphone" type="number" class="form-control"
                                            value={this.state.cellphone} onChange={this.onChange}/>
                                        </div>                                    
                                    </div>
                                    <div class="row pt-2">                                        
                                        <div class="col-md-2">
                                            <label> Name: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="username" type="text" class="form-control"
                                            value={this.state.username} onChange={this.onChange}/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Surname: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="surname" type="text" class="form-control"
                                            value={this.state.surname} onChange={this.onChange}/>
                                        </div>                                        
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label> Mail: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <input name="mail" type="text" class="form-control"
                                            value={this.state.mail} onChange={this.onChange}/>
                                        </div>
                                        <div class="col-md-2">
                                            <label> Birthdate: </label>
                                        </div>
                                        <div className="col-md-4">
                                            <input name="birthdate" type="date" class="form-control"
                                            value={this.state.birthdate} onChange={this.onChange}/>
                                        </div>         
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-2">
                                            <label>Country: </label>
                                        </div>
                                        <div class="col-md-4">
                                            <select name="selectCountry" value={this.state.country} class="form-control" onChange={this.onChange}>
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
                                            <label>Masculino<input name="isGenero" value="M" type="radio" checked={true}/></label>
                                            <label>Femenino<input name="isGenero" value="F" type="radio" /></label>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="row pt-2"> 
                                    <div class="col-md-1"/>
                                    <div class="col-md-4">
                                        <input class="btn btn-primary mx-auto" type="submit" value="Submit" />                                       
                                    </div>
                                    <div class="col-md-1"/>
                                    <div class="col-md-4">
                                        <button class="btn btn-danger mx-auto" type="button" name="Back" onClick={this.onClickBack}> Back </button>
                                    </div>
                                    <div class="col-md-2"/>
                                </div>
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