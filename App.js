import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agua from './src/pages/Agua/index';
import Consultas from './src/pages/Consultas/index';
import Coracao from './src/pages/coracao/index';
import Diabetes from './src/pages/Diabetes/index';
import Exames from './src/pages/Exames/index';
import Home from './src/pages/home/index';
import Login from './src/pages/Login/index';
import Medicamento from './src/pages/Medicamento/index';
import Mental from './src/pages/Mental/index';
import Pressao from './src/pages/Pressao/index';
import Prontuario from './src/pages/Prontuario/index';
import Registro from './src/pages/Registro/index';
import Socorros from './src/pages/socorros/index';
import Vacinas from './src/pages/Vacinas/index';



const Stack = createNativeStackNavigator ();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="Registro" component={Registro} />
  <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Medicamento" component={Medicamento} />
        <Stack.Screen name="Exames" component={Exames} />
        <Stack.Screen name="Socorros" component={Socorros} />
        <Stack.Screen name="Coracao" component={Coracao} />
        <Stack.Screen name="Vacinas" component={Vacinas} />
        <Stack.Screen name="Agua" component={Agua} />
        <Stack.Screen name="Consultas" component={Consultas} />
        <Stack.Screen name="Prontuario" component={Prontuario} />
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="Mental" component={Mental} />
        <Stack.Screen name="Pressao" component={Pressao} />
        <Stack.Screen name="Diabetes" component={Diabetes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  

 




 