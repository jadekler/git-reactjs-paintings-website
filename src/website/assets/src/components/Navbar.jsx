import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'

export default class Navbar extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarTitle text="Hanna Schulz Painting"/>
        <ToolbarGroup>
          <FlatButton label="Paintings"/>
          <FlatButton label="Cards"/>
          <FlatButton label="Contact"/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}