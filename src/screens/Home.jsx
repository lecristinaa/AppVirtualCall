import React from 'react'
import { View, Text, SafeAreaView, Image,  } from 'react-native'
import Footer from '../components/Footer'
import styles from '../constants/styles'

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja Bem-Vindo!</Text>
        <Text style={styles.subtitle}>A Chamada Virtual foi criada com o intuito de melhorar o tempo dentro da sala de aula.</Text>
        <Text style={styles.subtitle}>Aqui as turmas são separadas por seções, onde pode marcar presença ou ausença para cada aluno.</Text>

        <Image
        source={require('../assets/pdm-chamada.png')}
        style={styles.image}
      />

      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}