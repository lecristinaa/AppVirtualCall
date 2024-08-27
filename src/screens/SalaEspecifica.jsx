import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import Footer from '../components/Footer'
import styles from '../constants/styles'

export default function SalaEspecifica({ navigation, route }) {
  // Recebe o nome da sala selecionada através dos parâmetros de navegação
  const { sala } = route.params

  // Define as seções disponíveis na sala
  const secoes = ['A', 'B']

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione uma Seção</Text>

        {/* Mapeia cada seção para um botão clicável */}
        {secoes.map(secao => (
          <TouchableOpacity
            key={secao} // Chave única para cada botão
            onPress={() => navigation.navigate('Alunos', { sala, secao })}
            style={styles.button}
          >
            {/* Exibe o nome da sala junto com a seção */}
            <Text style={styles.buttonText}>{`${sala} ${secao}`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
