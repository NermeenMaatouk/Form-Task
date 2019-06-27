import React, { Fragment } from 'react';

class List extends React.Component {

    state = {
        isEdit: false,
        newData: { name: "", gender: "" },
    }

    toggleRow = () => {
        var isEdit = this.state.isEdit
        this.setState({
            isEdit: !isEdit
        }, console.log(isEdit))
    }

    renderForm = () => {
        var row = this.props.row
        var index = this.props.index
        return (
            <ul>
                <li>{index + 1}</li>
                <li>{row.name}</li>
                <li>{row.gender}</li>
                <li>
                    <button type="submit" onClick={() => this.props.DeleteRow(index)}>Decrease</button>
                </li>
                <li>
                    <button type="submit" onClick={() => this.toggleRow()}>Edit</button>
                </li>
            </ul>
        )
    }

    updateRow = (event) => {
        event.preventDefault()
        this.props.updateRow(this.props.index, this.state.newData)
        this.toggleRow()
    }

    Value = () => {
        this.setState({
            newData: {
                ...this.state.newData,
                [this.input.name]: this.input.value,
                [this.context.name]: this.context.value
            }
        }, console.log("edited", this.state.newData))
    }

    updateForm = () => {
        var row = this.props.row
        return (
            <form onSubmit={this.updateRow}>
                <input type="text" name="name" ref={value => this.input = value} defaultValue={row.name} onChange={this.props.getValue} placeholder="Please Enter Your Name...."  />

                <select name="gender" ref={value => this.context = value} defaultValue={row.gender} onChange={this.props.getValue} >
                    <option>Select Your Gender</option>
                    <option>Female</option>
                    <option>Male</option>
                </select>

                <button type="submit"onClick={this.Value}>Update</button>

            </form>
        )
    }


    render() {
        var isEdit = this.state.isEdit
        return (
            <Fragment>
                {isEdit ? this.updateForm() : this.renderForm()}
            </Fragment>
        )
    }

}

export default List