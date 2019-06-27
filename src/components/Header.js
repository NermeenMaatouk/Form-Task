import React from 'react';

const Header = (props) => {
    return (
        <form onSubmit={props.toggleForm}>

            <label>Please Enter Your Name</label>
            <label>Please Choose Gender</label>
            <button type="submit" className="add"><h3>Add New User</h3></button>

        </form>
    )

}

export default Header