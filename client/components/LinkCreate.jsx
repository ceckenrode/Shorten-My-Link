import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {error: ''};
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref={(input) => {
            if (input) {
              input.focus();
            }
            this.input = input;
          }} className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('links.insert', this.input.value, (err) => {
      if (err) {
        this.setState({error: "Enter a valid url"});
      } else {
        this.setState({error: ""});
      }
    });
  }
}

export default LinkCreate;
