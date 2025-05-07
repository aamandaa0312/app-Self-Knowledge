import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Progresso from './src/Screens/Progresso';
import Respiracao from './src/Screens/Respiracao'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          title:"Tela Inicial"
        }}/>

        <Stack.Screen name='Progresso' component={Progresso}  options={{
          title:"Progresso" }}
          />
         <Stack.Screen name='Respiracao' component={Respiracao}  options={{
          title:"Respiração" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
