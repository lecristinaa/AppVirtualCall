import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import Footer from '../components/Footer'
import styles from '../constants/styles'


export default function Salas({ navigation }) {
  // Array que define as salas disponíveis para seleção
  const salas = ['Primeiro', 'Segundo', 'Terceiro']

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione uma Sala</Text>

        {/* Mapeamento do array de salas para criar botões */}
        {salas.map(sala => (
          <TouchableOpacity
            key={sala} // Chave única para cada botão
            onPress={() =>navigation.navigate('SalaEspecifica', { sala })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{sala}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
