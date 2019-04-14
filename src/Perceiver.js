import React, { Component } from "react"

export default class Perceiver extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="perceiver">
        <textarea readOnly value={this.props.retranslitedText} />
      </div>
    )
  }
}
