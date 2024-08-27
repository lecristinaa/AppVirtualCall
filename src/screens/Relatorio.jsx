import React, { useEffect, useState } from 'react' 
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native' 
import AsyncStorage from '@react-native-async-storage/async-storage' 
import styles from '../constants/styles' 
import Footer from '../components/Footer' 


export default function Relatorio({ navigation, route }) {
  const { sala, secao } = route.params 
  const [presentes, setPresentes] = useState(0) // Guarda o número de alunos presentes
  const [ausentes, setAusentes] = useState(0) // Guarda o número de alunos ausentes

  // useEffect é usado para carregar o relatório
  useEffect(() => {
    // Carrega os dados do AsyncStorage
    const carregarRelatorio = async () => {
      try {
        // Tenta obter os dados armazenados usando a chave
        const dadosArmazenados = await AsyncStorage.getItem(`${sala}-${secao}`)
        if (dadosArmazenados) {
          const alunos = JSON.parse(dadosArmazenados) // Converte os dados de JSON para um objeto JavaScript
          const totalPresentes = alunos.filter(aluno => aluno.presente).length // Conta quantos alunos estão presentes
          const totalAusentes = alunos.length - totalPresentes // Calcula o número de ausentes
          setPresentes(totalPresentes) // Atualiza o estado de presentes
          setAusentes(totalAusentes) // Atualiza o estado de ausentes
        }
      } catch (error) { // Exibe erros caso algo dê errado
        console.error('Erro ao carregar os dados:', error)
      }
    }
    carregarRelatorio() // Chama a função
  }, [sala, secao]) 

  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.container}> 
        <Text style={styles.title}>Relatório de Presença</Text> 
        <Text style={styles.relatorioText}>Sala: {sala} {secao}</Text> 
        <Text style={styles.relatorioText}>Total de Presentes: {presentes}</Text> 
        <Text style={styles.relatorioText}>Total de Ausentes: {ausentes}</Text> 

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}> 
          <Text style={styles.backButtonText}>Voltar</Text> 
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} /> 
    </SafeAreaView>
  )
}
