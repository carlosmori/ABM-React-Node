import React, { Component } from 'react'
import { connect } from 'react-redux';
import './addUser.css';
import { addUser, updateUser } from '../../actions/userActions';
export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : undefined,
            name: '',
            lastname: '',
            email: '',
            action: 'Add User'
        }
    }
    handleOnChangeInputs = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleUserSubmit = (event) => {
        event.preventDefault();
        const newUser = { id: this.state.id , name : this.state.name , lastname: this.state.lastname , email: this.state.email };
        //TODO refactor so Modify changes for Add User when update is complete
        this.state.action === 'Add User' ? this.props.addUser(newUser) : this.props.updateUser(newUser);
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.user.name !== prevState.name){
            this.setState({
                id : this.props.user.id,
                name : this.props.user.name,
                lastname : this.props.user.lastname,
                email : this.props.user.email,
                action: 'Update'
            })
        }
    }
    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" name="name" id="name"
                            className="form-control" placeholder="First name"
                            value={this.state.name}
                            onChange={this.handleOnChangeInputs} />
                    </div>
                    <div className="col">
                        <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Last name"
                            value={this.state.lastname}
                            onChange={this.handleOnChangeInputs} />
                    </div>
                    <div className="col">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleOnChangeInputs} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleUserSubmit}>{this.state.action}</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.usersReducerState.newUserFromRedux,
});

export default connect(mapStateToProps, { addUser , updateUser })(AddUser)
