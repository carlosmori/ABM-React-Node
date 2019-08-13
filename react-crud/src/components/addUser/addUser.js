import React, { Component } from 'react'
import axios from 'axios';
import './addUser.css';
export class AddUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" name="firstName" id="firstName"
                            className="form-control" placeholder="First name"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name"

                            value={this.state.lastName}
                            onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email"

                            value={this.state.email}
                            onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Add User</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddUser
