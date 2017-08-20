import { NavigationActions } from 'react-navigation'

export const pop = () => NavigationActions.back()

export const push = (routeName, params = {}) => {
  return NavigationActions.navigate({ params, routeName })
}
