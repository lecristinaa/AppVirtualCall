import React, { useState, useEffect } from 'react' 
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native' 
import AsyncStorage from '@react-native-async-storage/async-storage' 
import Footer from '../components/Footer' 
import styles from '../constants/styles' 


export default function Alunos({ navigation, route }) {
  const { sala, secao } = route.params

  // Lista de alunos por sala e seção
  const alunosPorSala = {
    Primeiro: {
      A: [
        { id: '1', nome: 'Ana', presente: false },
        { id: '2', nome: 'Bruno', presente: false },
      ],
      B: [
        { id: '3', nome: 'Carlos', presente: false },
        { id: '4', nome: 'Diana', presente: false },
      ],
    },
    Segundo: {
      A: [
        { id: '5', nome: 'Eduardo', presente: false },
        { id: '6', nome: 'Fernanda', presente: false },
      ],
      B: [
        { id: '7', nome: 'Gabriel', presente: false },
        { id: '8', nome: 'Helena', presente: false },
      ],
    },
    Terceiro: {
      A: [
        { id: '9', nome: 'Igor', presente: false },
        { id: '10', nome: 'Júlia', presente: false },
      ],
      B: [
        { id: '11', nome: 'Lara', presente: false },
        { id: '12', nome: 'Mateus', presente: false },
      ],
    },
  }

  // Armazena a lista de alunos
  const [alunos, setAlunos] = useState([])
  // Armazena o nome do novo aluno
  const [novoAluno, setNovoAluno] = useState('')

  // useEffect para carregar os dados dos alunos
  useEffect(() => {
    const carregarAlunos = async () => {
      try {
        // Tenta obter os dados armazenados usando a chave
        const dadosArmazenados = await AsyncStorage.getItem(`${sala}-${secao}`)
        if (dadosArmazenados) {
          setAlunos(JSON.parse(dadosArmazenados)) // Se houver dados, define a lista de alunos
        } else {
          setAlunos(alunosPorSala[sala][secao]) // Caso contrário, define a lista padrão
        }
      } catch (error) {
        console.error('Erro ao carregar os dados:', error) // Exibe erros caso algo dê errado
      }
    }
    carregarAlunos() // Chama a função
  }, [sala, secao])

  // useEffect para salvar os dados dos alunos
  useEffect(() => {
    const salvarAlunos = async () => {
      try {
        await AsyncStorage.setItem(`${sala}-${secao}`, JSON.stringify(alunos)) // Salva a lista de alunos no AsyncStorage
      } catch (error) {
        console.error('Erro ao salvar os dados:', error) // Exibe erros caso algo dê errado
      }
    }
    salvarAlunos() // Chama a função
  }, [alunos, sala, secao])

  // Alterna a presença de um aluno com base no seu ID
  const marcarPresenca = (id) => {
    const novaLista = alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno // Alterna o status de presença do aluno
    )
    setAlunos(novaLista) // Atualiza a lista de alunos com a nova presença
  }

  // Adiciona um novo aluno à lista
  const adicionarAluno = () => {
    if (novoAluno.trim()) { // Verifica se o nome do aluno não está vazio
      const novoId = (alunos.length + 1).toString() // Gera um ID único para o novo aluno
      const alunoNovo = { id: novoId, nome: novoAluno, presente: false } // Cria o novo aluno
      // Adiciona o novo aluno à lista e ordena os alunos por ordem alfabética
      const novaListaAlunos = [...alunos, alunoNovo].sort((a, b) => 
        a.nome.localeCompare(b.nome)
      )
      setAlunos(novaListaAlunos) // Atualiza a lista de alunos
      setNovoAluno('') // Limpa o campo de entrada do novo aluno
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Alunos da {sala} {secao}</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do novo aluno"
            value={novoAluno}
            onChangeText={setNovoAluno}
          />
          <TouchableOpacity onPress={adicionarAluno} style={styles.addButton}>
            <Text style={styles.addButtonText}>Adicionar Aluno</Text>
          </TouchableOpacity>
        </View>
        
        {/* Lista de alunos */}
        <FlatList
          data={alunos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => marcarPresenca(item.id)} style={styles.alunoButton}>
              <Text style={styles.alunoNome}>{item.nome}</Text>
              <Text style={[styles.presencaText, { color: item.presente ? 'green' : 'red' }]}>
                {item.presente ? 'Presente' : 'Ausente'}
              </Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity 
          onPress={() => navigation.navigate('Relatorio', { sala, secao })} 
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Ver Relatório</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
