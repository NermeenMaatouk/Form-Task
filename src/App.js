import React, { Fragment } from 'react';
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

class App extends React.Component {

  state = {
    data: [
      { name: "Ali", gender: "Male" },
      { name: "Noha", gender: "Female" },
      { name: "Ahmed", gender: "Male" }
    ],
    current: { name: "", gender: "" },
    showForm: false
  }

  toggleForm = (event) => {
    event.preventDefault()
    var showForm = this.state.showForm
    this.setState({
      showForm: !showForm
    }, console.log(showForm))
  }

  Add = (event) => {
    event.preventDefault()
    var data = this.state.data
    var current = this.state.current
    data.push(current)
    this.setState({
      data,
      current: { name: "", gender: "" }
    }, console.log(this.state))
  }

  getValue = (event) => {
    this.setState({
      current: {
        ...this.state.current,
        [event.target.name]: event.target.value
      }
    })
    console.log("current", this.state.current)
  }

  DeleteRow = (index) => {
    var data = this.state.data
    data.splice(index, 1)
    this.setState({
      data
    })
  }

  updateRow=(index,input)=>{
    console.log('5',input)
    var data = this.state.data
    var current = data[index]
    current['name'] = input.name
    current['gender'] = input.gender
    this.setState({
      data
    },console.log(data))
}

  render() {
    var data = this.state.data
    var row = data.map((row, index) => {
      return (
        <Fragment key={index}>
          <List row={row} index={index} DeleteRow={this.DeleteRow} updateRow={this.updateRow}/>
        </Fragment>
      )
    })
    return (
      <div className="App">
        <fieldset className="form">
          <legend><h2>Our Form</h2></legend>
          <Header toggleForm={this.toggleForm} />
          <Form showForm={this.state.showForm} Add={this.Add} getValue={this.getValue} current={this.state.current} />
        </fieldset>
        <fieldset className="data">
          <legend><h2>Users Data</h2></legend>
          {row}
        </fieldset>
      </div>
    );
  }

}

export default App;
