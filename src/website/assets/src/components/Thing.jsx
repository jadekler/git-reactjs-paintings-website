import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton';

export default class Thing extends Component {
  render() {
    return (
      <div>
        <RaisedButton label="Primary" primary={true}/>
        This is react.js!
      </div>
    )
  }
}