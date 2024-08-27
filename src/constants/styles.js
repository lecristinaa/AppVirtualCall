import { StyleSheet } from 'react-native'
import { heightTela, widthTela } from './dimensions'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24, 
    paddingTop: 20, 
    paddingBottom: 20, 
    marginTop: 90,
  },
  // Home
  title: {
    fontSize: 40, 
    marginBottom: 20,
    color: '#f39873',
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
  subtitle: {
    fontSize: 20, 
    marginBottom: 20,
    color: '#f39873',
    fontWeight: 'bold', 
    textAlign: 'left', 
  },
  image: {
    marginTop: 250,
    width: 150, 
    height: 150, 
  },
  // Sala e Sala Especifica
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15, 
    backgroundColor: '#f39873',
    borderWidth: 2,
    borderRadius: 10, 
    borderColor: '#f39873',
    width: '85%', 
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 }, 
    shadowOpacity: 0.15, 
    elevation: 3, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600', 
  },
  // Aluno
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#f39873',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff', 
  },
  addButton: {
    backgroundColor: '#f39873',
    padding: 5, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    width: 90, 
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600', 
  },
  alunoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 2,
    borderColor: '#f39873',
    borderRadius: 10,
    marginVertical: 8, 
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2, 
  },
  alunoNome: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500', 
  },
  // Relatorio
  presencaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', 
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#f39873',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  relatorioText: {
    fontSize: 20,
    color: '#000',
    marginVertical: 5,
  },
})
