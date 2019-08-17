import React, { Component } from 'react'
import axios from 'axios';
import './addUser.css';
export class AddUser extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" name="firstName" id="firstName"
                            className="form-control" placeholder="First name"
                            value={this.props.newUser.firstName}
                            onChange={this.props.handleAddUserChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name"
                            value={this.props.newUser.lastName}
                            onChange={this.props.handleAddUserChange} />
                    </div>
                    <div className="col">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email"

                            value={this.props.newUser.email}
                            onChange={this.props.handleAddUserChange} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.props.handleUserSubmit}>Add User</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddUser
