import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, View, Text } from 'react-native'

import * as router from '../router/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const mapDispatchToProps = (dispatch) => ({
  navigate: (to) => dispatch(router.push(to))
})

const MainScreen = (props) => (
  <View style={styles.container}>
    <Text>Main Screen</Text>
    <Button
      title='Go to params'
      onPress={() => props.navigate('Params')}
    />
  </View>
)

MainScreen.navigationOptions = {
  title: 'Home Screen',
}

export default connect(
  null,
  mapDispatchToProps
)(MainScreen)
