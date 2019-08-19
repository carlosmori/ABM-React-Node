import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userActions';
import './user.css';
export class User extends Component {
    deleteUser = () => {
        this.props.deleteUser(this.props.user.id);
    }
    modifyUser = () => {
        console.log('%c __________Debug__________ ', 'background: #028286;color:#FFF;border-radius: 5px;line-height: 26px');
        console.log('Modifying user');
        console.log('%c __________Debug__________ ', 'background: #028286;color:#FFF;border-radius: 5px;line-height: 26px');
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
                    <button type="button" className="btn btn-success" onClick={this.modifyUser}>Modify</button>
                </td>
            </tr>
        )
    }
}


const mapStateToProps = state => ({

});
export default connect(mapStateToProps, { deleteUser })(User)
