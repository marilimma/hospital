import React, { useState, useRef } from "react";
import { Text, View, Pressable, Image, TextInput, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function SplashScreen() {
  const navigation = useNavigation();

  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(0);
  const [quantidade, setQuantidade] = useState(0);


  const scaleCopo = useRef(new Animated.Value(1)).current;
  const scaleGarrafa = useRef(new Animated.Value(1)).current;
  const scaleGalao = useRef(new Animated.Value(1)).current;

  const agua = () => {
    const meta = Number(peso) * 35;
    setResultado(meta);
    setQuantidade(0);
  };

  const garrafa = () => setQuantidade(quantidade + 500);
  const copo = () => setQuantidade(quantidade + 200);
  const galao = () => setQuantidade(quantidade + 800);

  
  const animarBotao = (scaleRef, callback) => {
    Animated.sequence([
      Animated.timing(scaleRef, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleRef, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => callback && callback());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.campo}
        value={peso}
        placeholder="Digite seu peso"
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      <Pressable onPress={agua} style={styles.enviar}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          Enviar
        </Text>
      </Pressable>

      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Meta de água: {resultado} ml
      </Text>

      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Já tomou: {quantidade} ml
      </Text>

      <View style={styles.progressoContainer}>
        <View
          style={[
            styles.progresso,
            { width: `${Math.min((quantidade / resultado) * 100, 100)}%` },
          ]}
        />
      </View>

      {quantidade >= resultado && resultado > 0 && (
        <Text style={{ fontSize: 20, color: "green", marginTop: 10 }}>
          🎉 Arrasou viado!
        </Text>
      )}

      <View style={styles.botoes}>
        {/* Botão Copo */}
        <Pressable
          onPress={() => animarBotao(scaleCopo, copo)}
          style={styles.botao}
        >
          <Animated.Image
            source={require("../../../assets/images/copo.png")}
            style={[styles.copo, { transform: [{ scale: scaleCopo }] }]}
          />
        </Pressable>

        
        <Pressable
          onPress={() => animarBotao(scaleGarrafa, garrafa)}
          style={styles.botao}
        >
          <Animated.Image
            source={require("../../../assets/images/garraf1.png")}
            style={[styles.garrafa, { transform: [{ scale: scaleGarrafa }] }]}
          />
        </Pressable>

       
        <Pressable
          onPress={() => animarBotao(scaleGalao, galao)}
          style={styles.botao}
        >
          <Animated.Image
            source={require("../../../assets/images/ga.png")}
            style={[styles.galao, { transform: [{ scale: scaleGalao }] }]}
          />
        </Pressable>
      </View>
    </View>
  );
}
