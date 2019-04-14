import React, { Component } from "react"

export default class Receiver extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <div className="receiver">
        <textarea placeholder="Type translited text" onChange={this.handleChange} />
      </div>
    )
  }
}
