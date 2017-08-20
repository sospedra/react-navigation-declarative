import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

const routesTransform = (memo, [name, screen, path]) => {
  return Object.assign({}, memo, {
    [name]: { screen }
  })
}

export const createNavigator = (routes) => {
  return StackNavigator(routes.reduce(routesTransform, {}))
}

const mapStateToProps = (state) => ({
  router: state.router,
})

const Router = (props) => (
  <props.navigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.router
    })}
  />
)

Router.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps
)(Router)
