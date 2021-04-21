import React from 'react'
import { StyleSheet } from 'react-native'
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost'

import { Welcome } from './src/pages/Welcome'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  })

  //fica aresentando a tela de splash
  if (!fontsLoaded) {
    return <AppLoading />
  }

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