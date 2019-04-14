import React, { Component } from "react"
import { hot } from "react-hot-loader"
import Receiver from "./Receiver"
import Perceiver from "./Perceiver"
import Translator from "./Translator"
import Retransliter from "./Retransliter"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(value) {
    this.setState({ text: value })
  }

  render() {
    const retranslitedText = new Retransliter(this.state.text).retranslit()

    return (
      <div className="app">
        <h1>Retranslit Georgian</h1>
        <div className="inputHolder">
          <Receiver onTextChange={this.handleTextChange} />
          <Perceiver retranslitedText={retranslitedText} />
        </div>
        <Translator retranslitedText={retranslitedText} />
      </div>
    )
  }
}

export default hot(module)(App)
