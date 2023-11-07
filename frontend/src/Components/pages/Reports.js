import React from 'react'
import Navigation from '../Navigation'

export default function Reports(props) {
  return (
    <div>
      <Navigation updateMode={props.update} modeOut={props.modeValue} />
    </div>
  )
}
