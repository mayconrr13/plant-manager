import React from 'react'
import { 
  Image, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  Dimensions, 
  View
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image source={wateringImg} style={style.image} resizeMode="contain"/>

        <Text style={style.subtitle}>
          Não esqueça mais de regar suas {'\n'}plantas. Nós cuidamos de lembrar você
          {'\n'}sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={style.button} 
          activeOpacity={0.7}
        >
          <Feather name="chevron-right" style={style.buttonIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1, 
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  button: {
    backgroundColor: colors.green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },

  image: {
    width: '80%',
    height: (Dimensions.get('window').width * 0.7),
  },
})
