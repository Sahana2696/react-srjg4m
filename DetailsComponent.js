import React, { Component } from 'react';
import ViewComponent from './ViewComponent';
export default class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Mobileno: "",
      Mailid: ""
    }
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleMobileno = this.handleMobileno.bind(this);
    this.handleMailid = this.handleMailid.bind(this);
    this.updateChange=this.updateChange.bind(this);
  }
  handleFirstname(e) {
    this.setState({
      Firstname: e.target.value,
    });
  }
  handleLastname(e) {
    this.setState({
      Lastname: e.target.value,
    });
  }
  handleMobileno(e) {
    this.setState({
      Mobileno: e.target.value,
    });
  }
  handleMailid(e) {
    this.setState({
      Mailid: e.target.value,
    });
  }
  updateChange(e)
{
    console.log("details",this.state)
}
  render() {
    return (
      <div>
        <label>Firstname</label>
        <input type="text"
          value={this.state.Firstname}
          onChange={this.handleFirstname} /><br/>
        <label>Lastname</label>
        <input type="text"
          value={this.state.Lastname}
          onChange={this.handleLastname} /><br/>
        <label>Mobileno</label>
        <input type="text"
          value={this.state.Mobileno}
          onChange={this.handleMobileno} /><br/>
          <label>Mailid</label>
        <input type="text"
          value={this.state.Mailid}
          onChange={this.handleMailid} /><br/>
          <button type="button" 
          onClick={this.updateChange}>Submit</button>
         < ViewComponent details={this.state}/>
         
      </div>

    )
  }





}