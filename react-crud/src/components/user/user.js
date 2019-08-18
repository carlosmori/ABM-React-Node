import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userActions';
export class User extends Component {
    deleteUser = () => {
        alert('Hola');
        this.props.deleteUser(this.props.user.id);
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
                </td>
            </tr>
        )
    }
}


const mapStateToProps = state => ({

});
export default connect(mapStateToProps, { deleteUser })(User)
