import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home/index';
import Login from './src/pages/Login/index';
//import Registro from './src/pages/Registro/index';
import Agua from './src/pages/Agua/index';





const Stack = createNativeStackNavigator ();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Agua" component={Agua} />    
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  

 




 