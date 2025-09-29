import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  campo: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    marginBottom: 15,
    fontSize: 16,
  },
  enviar: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    marginTop: 10,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  botao: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  copo: {
    width: 80,
    height: 85,
  },
  garrafa: {
    width: 80,
    height: 135,
    
  },
  galao: {
    width: 100,
    height: 145,
  },
  progressoContainer: {
    height: 20,
    width: "80%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 15,
    overflow: "hidden",
  },
  progresso: {
    height: "100%",
    backgroundColor: "#3498db",
  },
});

export default styles;
