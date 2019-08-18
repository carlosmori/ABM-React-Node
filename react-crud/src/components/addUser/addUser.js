import React, { Component } from 'react'
import { connect } from 'react-redux';
import './addUser.css';
import { addUser } from '../../actions/userActions';
export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    handleOnChangeInputs = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleUserSubmit = (event) => {
        event.preventDefault();
        const newUser = { ...this.state };
        this.props.addUser(newUser);
    }
    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" name="firstName" id="firstName"
                            className="form-control" placeholder="First name"
                            value={this.state.firstName}
                            onChange={this.handleOnChangeInputs} />
                    </div>
                    <div className="col">
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name"
                            value={this.state.lastName}
                            onChange={this.handleOnChangeInputs} />
                    </div>
                    <div className="col">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleOnChangeInputs} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleUserSubmit}>Add User</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    //users: state.usersReducerState.usersFromRedux,
});

export default connect(mapStateToProps, { addUser })(AddUser)
