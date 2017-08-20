import { combineReducers, createStore } from 'redux'

const createRouterReducer = (Router) => {
  const initialState = Router.router.getStateForAction(
    Router.router.getActionForPathAndParams('Main')
  )

  return (state = initialState, action) => {
    const nextState = Router.router.getStateForAction(action, state)

    return nextState || state
  }
}

export default function composer (Router) {
  const reducers = combineReducers({
    router: createRouterReducer(Router),
  })

  return createStore(reducers)
}
