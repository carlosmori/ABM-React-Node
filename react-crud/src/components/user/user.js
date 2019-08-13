import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.user.id}</th>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.lastname}</td>
                <td>{this.props.user.email}</td>
            </tr>
        )
    }
}

export default User
