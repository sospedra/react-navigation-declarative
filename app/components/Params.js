import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const MainScreen = () => (
  <View style={styles.container}>
    <Text>Params Screen</Text>
  </View>
)

MainScreen.navigationOptions = {
  title: 'Params Screen',
}

export default MainScreen
