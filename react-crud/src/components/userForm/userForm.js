import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './userForm.css';
let UsersForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col">
                    <Field name="firstName" className="form-control" component="input" type="text" />
                </div>
                <div className="col">
                    <Field name="lastName" className="form-control" component="input" type="text" />
                </div>
                <div className="col">
                    <Field name="email" className="form-control" component="input" type="email" />
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary mb-2">Add User</button>
                </div>
            </div>
        </form>
    )

}

UsersForm = reduxForm({
    form: 'usersForm'
})(UsersForm)
export default UsersForm
