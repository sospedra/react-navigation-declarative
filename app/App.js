/* eslint-disable react/display-name */
import React from 'react'
import { Provider } from 'react-redux'

import composer from './composer'
import Router, { createNavigator } from './router/Router'
import MainScreen from './components/Main'
import ParamsScreen from './components/Params'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.navigator = createNavigator([
      ['Main', MainScreen, '/'],
      ['Params', ParamsScreen, '/params/:anything']
    ])
  }

  render () {
    return (
      <Provider store={composer(this.navigator)}>
        <Router navigator={this.navigator} />
      </Provider>
    )
  }
}
