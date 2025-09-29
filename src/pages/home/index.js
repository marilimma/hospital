import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getUsuarios } from '../api/api';

export default function SplashScreen() {
  const navigation = useNavigation();
  const Logout = async () => {
      console.log('Usuário saiu');

    const [usuarios, setUsuarios] = useState([]);

useEffect(() => {
  getUsuarios().then(data => setUsuarios(data));
}, []);

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Abstrato.jpg')} style={styles.fundo} resizeMode="cover">
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
    
          <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('Medicamento')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/remedio1.png')} />
              <Text style={styles.label}>Medicamentos</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Exames')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/sangue.png')} />
              <Text style={styles.label}>Exames</Text>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('Socorros')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/curativo.png')} />
              <Text style={styles.label}>Socorros</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Coracao')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/coracao.png')} />
              <Text style={styles.label}>Coracao</Text>
            </Pressable>
          </View>

    
          <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('Vacinas')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/injecao.png')} />
              <Text style={styles.label}>Vacinas</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Agua')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/agua.png')} />
              <Text style={styles.label}>Agua</Text>
            </Pressable>
          </View>

       
          <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('Consultas')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/png.jpg')} />
              <Text style={styles.label}>Consultas</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Prontuario')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/prancheta.jpg')} />
              <Text style={styles.label}>Prontuario</Text>
            </Pressable>
          </View>

     
          <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('IMC')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/balanca.jpg')} />
              <Text style={styles.label}>IMC</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Mental')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/fones.jpg')} />
              <Text style={styles.label}>Mental</Text>
            </Pressable>
          </View>

      
          <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('Pressao')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/pressao.jpg')} />
              <Text style={styles.label}>Pressao</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Diabetes')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/gli.jpg')} />
              <Text style={styles.label}>Diabetes</Text>
            </Pressable>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fundo: { flex: 1 },
  scrollContent: { 
    paddingVertical: 20,
    flexGrow: 1, 
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  pressable: {
    width: '48%',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
s