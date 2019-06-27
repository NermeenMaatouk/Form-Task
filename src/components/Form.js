import React, { Fragment } from 'react';

class Form extends React.Component {

    Form = () => {
        return (
            <form>

                <input type="text" name="name" value={this.props.current.name} onChange={this.props.getValue} placeholder="Please Enter Your Name...." required />

                <select name="gender" value={this.props.current.gender} onChange={this.props.getValue} required>
                    <option>Select Your Gender</option>
                    <option>Female</option>
                    <option>Male</option>
                </select>

                <button type="submit" onClick={this.props.Add}>Add</button>
            </form>
        )
    }

    noForm = () => {
        return (
            <Fragment>
            </Fragment>
        )
    }

    render() {
        var showForm = this.props.showForm
        return (
            <Fragment>
                {showForm ? this.Form() : this.noForm()}
            </Fragment>
        )
    }

}

export default Form