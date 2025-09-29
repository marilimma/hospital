import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ImageBackground, Modal, Pressable, Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const login = async () => {
    if (!validarEmail(email)) {
      setModalMessage('Por favor, insira um email válido.');
      setModalVisible(true);
      return;
    }
    if (!senha) {
      setModalMessage('Por favor, digite a senha.');
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: senha })
      });

      const data = await response.json();

      if (response.ok) {
        // Salva o token no AsyncStorage
        await AsyncStorage.setItem('userToken', data.token);
        console.log('Login realizado, token salvo!');
        navigation.navigate('Home'); // Redireciona para a Home
      } else {
        setModalMessage(data.message || 'Erro no login. Verifique seus dados.');
        setModalVisible(true);
      }
    } catch (error) {
      setModalMessage('Erro ao conectar com o servidor. Tente novamente.');
      setModalVisible(true);
      console.error(error);
    }
  };

  return (
    <ImageBackground 
      source={{uri: 'https://reactjs.org/logo-og.png'}} 
      style={styles.fundo} 
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>

        <TextInput
          style={styles.campo}
          value={email}
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.campo}
          value={senha}
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          secureTextEntry
        />

        <Pressable onPress={login} style={styles.botao}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Entrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Home')} style={styles.botaoConvidado}>
          <Text style={styles.botaoConvidadoTexto}>Entrar como convidado</Text>
        </Pressable>

        <Text style={styles.link} onPress={() => navigation.navigate('Registro')}>
          Ainda não tem sua conta? Cadastre-se já!
        </Text>

        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>{modalMessage}</Text>
              <Button title="Fechar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}