import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'

export default class Navbar extends React.Component {
  render() {
    const blue50 = "#E3F2FD"
    const blue100 = "#BBDEFB"
    const blue700 = "#1976D2"

    return (
      <Toolbar style={{backgroundColor: blue700, color: "white"}}>
        <ToolbarTitle text="Hanna Schulz Painting" className="toolbar-title" onClick={_ => {window.location = '/'}}/>
        <ToolbarGroup>
          <FlatButton hoverColor={blue100} backgroundColor={blue50} label="Paintings" primary={this.currentPage() == 'paintings'} onClick={_ => {window.location = '/paintings'}}/>
          <FlatButton hoverColor={blue100} backgroundColor={blue50} label="Cards" primary={this.currentPage() == 'cards'} onClick={_ => {window.location = '/cards'}}/>
          <FlatButton hoverColor={blue100} backgroundColor={blue50} label="Custom Orders" primary={this.currentPage() == 'custom_works'} onClick={_ => {window.location = '/custom_works'}}/>
          <FlatButton hoverColor={blue100} backgroundColor={blue50} label="Contact" primary={this.currentPage() == 'contact'} onClick={_ => {window.location = '/contact'}}/>
        </ToolbarGroup>
      </Toolbar>
    )
  }

  currentPage() {
    switch (window.location.pathname) {
      case '/paintings':
        return 'paintings'
      case '/cards':
        return 'cards'
      case '/custom_works':
        return 'custom_works'
      case '/contact':
        return 'contact'
      default:
        return 'unknown'
    }
  }
}