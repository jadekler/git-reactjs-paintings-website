import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import GridListExampleSimple from './GridListExample'

export default class Thing extends Component {
  render() {
    return (
      <div>
        <RaisedButton label="Primary" primary={true}/>
        <GridListExampleSimple/>
        This is react.js!
      </div>
    )
  }
}