import React, { Component } from 'react'
import User from '../user/user';
import { fetchUsers } from '../../actions/userActions';
import { connect } from 'react-redux';
export class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, index) => {
                        return <User key={index} user={user} />
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersReducerState.usersFromRedux,
});

export default connect(mapStateToProps, { fetchUsers })(UserList)
