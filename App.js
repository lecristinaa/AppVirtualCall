import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home.jsx'
import Salas from './src/screens/Salas.jsx'
import Relatorio from './src/screens/Relatorio.jsx'
import Alunos from './src/screens/Alunos.jsx'
import SalaEspecifica from './src/screens/SalaEspecifica.jsx'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Salas" component={Salas} options={{ headerShown: false }}/>
        <Stack.Screen name="Relatorio" component={Relatorio} options={{ headerShown: false }} />
        <Stack.Screen name="Alunos" component={Alunos} options={{ headerShown: false }} />
        <Stack.Screen name="SalaEspecifica" component={SalaEspecifica} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}