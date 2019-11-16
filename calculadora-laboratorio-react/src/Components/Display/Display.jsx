import React from 'react'

const Display = ({ text }) => {
  const bodyStyle = {
    backgroundColor: '#F2D1F4',
    width: '500px',
    height: '175px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
  const fontStyleCal = {
    margin: '0px',
    marginRight: '20px',
    fontSize: '90px',
    fontFamily: 'Roboto Condensed,sans-serif',
  }
  return (
    <div style={bodyStyle} id="Display">
      <h5 style={fontStyleCal}>{text}</h5>
    </div>
  )
}

export default Display
