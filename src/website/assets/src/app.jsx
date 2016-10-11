import '../stylesheets/app.scss' // required for wepback to build css

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react'
import ReactDOM from 'react-dom'

import {Provider, connect} from 'react-redux'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import some_reducer from './reducers/some_reducer'
import Thing from './components/Thing'

const store = function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)

  return createStoreWithMiddleware(combineReducers({
    some_reducer
  }), initialState)
}()

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Thing)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedApp />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)