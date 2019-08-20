import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteUser , setCurrentUser } from '../../actions/userActions';
import './user.css';
export class User extends Component {
    deleteUser = () => {
        this.props.deleteUser(this.props.user.id);
    }
    updateUser = () => {
        this.props.setCurrentUser(this.props.user);
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.user.id}</th>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.lastname}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={this.deleteUser}>Delete</button>
                    <button type="button" className="btn btn-success" onClick={this.updateUser}>Update</button>
                </td>
            </tr>
        )
    }
}


const mapStateToProps = state => ({

});
export default connect(mapStateToProps, { deleteUser , setCurrentUser })(User)
