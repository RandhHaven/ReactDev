import React, { Component } from 'react'
import './DataGrid.css'
import firebase from 'firebase'
import { firebaseConfig } from './config/db_config.js'
import 'firebase/database'

class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { noteId: 1, noteContent: ' contenido nota 1' },
                { noteId: 2, noteContent: ' contenido nota 2' },
                { noteId: 3, noteContent: ' contenido nota 3' }
            ]
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.db = firebase.database().ref().child('dbGrids');

        this.state1 = {
            tasks: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'],
        };
    }

    componentDidMount(event) {

    }

    onClickEdit() {
    }

    onClickDelete() {
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <div class="row pt-2">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>
                                    <button class="btn btn-primary" type="button" name="Back" onClick={this.onClickEdit}> Edit </button>
                                    <button class="btn btn-danger mx-auto" type="button" name="Back" onClick={this.onClickDelete}> Delete </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
                <div className="grid-item">
                    {tasks}
                </div>
            </div>

        )
    };
}

export default DataGrid;