import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '80%',
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginTop: 10,
    width: '80%',
    borderRadius: 5,
  },
  botaoConvidado: {
    marginTop: 10,
  },
  botaoConvidadoTexto: {
    color: '#007AFF',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});