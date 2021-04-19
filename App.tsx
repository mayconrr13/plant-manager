import React from 'react'
import {View, StyleSheet,  } from 'react-native'

import { Welcome } from './src/pages/Welcome'

export default function App() {
  return (
    <Welcome />
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})