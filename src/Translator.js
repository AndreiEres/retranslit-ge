import React, { Component } from "react"

export default class Translator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const href = `https://translate.yandex.com/?lang=ka-ru&text=${this.props.retranslitedText.replace(/ /g, "%20")}`
    return (
      <div className="translator">
        <a href={href} target="_blank">
          Translate it via Yandex
        </a>
      </div>
    )
  }
}
