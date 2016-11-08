import '../stylesheets/app.scss' // required for wepback to build css

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import React from 'react'
import ReactDOM from 'react-dom'

import PhotosGridList from './components/PhotosGridList'
import CustomWorksForm from './components/CustomWorksForm'
import Navbar from './components/Navbar'

if (document.getElementById('paintings-root')) {
  ReactDOM.render(
    <MuiThemeProvider>
      <PhotosGridList/>
    </MuiThemeProvider>, document.getElementById('paintings-root'))
}

if (document.getElementById('navbar')) {
  ReactDOM.render(
    <MuiThemeProvider>
      <Navbar/>
    </MuiThemeProvider>, document.getElementById('navbar'))
}

if (document.getElementById('custom-works-root')) {
  ReactDOM.render(
    <MuiThemeProvider>
      <CustomWorksForm/>
    </MuiThemeProvider>, document.getElementById('custom-works-root'))
}