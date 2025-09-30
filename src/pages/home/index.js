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
    //<ImageBackground source={require('../../../assets/images/Abstrato.jpg')} style={styles.fundo} resizeMode="cover">
        <ScrollView contentContainerStyle={styles.scrollContent}>
  
            <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate('Agua')} style={styles.pressable}>
              <Image style={styles.img} source={require('../../../assets/images/agua.png')} />
              <Text style={styles.label}>Agua</Text>
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