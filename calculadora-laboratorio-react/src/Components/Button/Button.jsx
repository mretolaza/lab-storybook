import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    const {
      color,
    } = this.props
    this.state = {
      color,
    }
  }

  mouseEnter() {
    this.setState({ color: '#D3F0FF' })
  }

  mouseLeave() {
    this.setState({ color: '#DBB3F2' })
  }

  render() {
    const {
      text,
      click,
    } = this.props

    const {
      color,
    } = this.state

    const bodyStyle = {
      backgroundColor: color,
      border: '2px solid #D3F0FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '120px',
      height: '100px',
    }
    const letterStyle = {
      margin: '0px',
      fontSize: '35px',
      fontFamily: 'Roboto Condensed,sans-serif',
    }

    return (
      <div
        aria-hidden
        role="button"
        style={bodyStyle}
        onMouseOver={this.mouseEnter.bind(this)}
        onFocus={() => 0}
        onMouseLeave={this.mouseLeave.bind(this)}
        onClick={click}
        onKeyDown={() => 0}
      >
        <h5 style={letterStyle}>{text}</h5>
      </div>
    )
  }
}
