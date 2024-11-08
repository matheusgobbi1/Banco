import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ContinueButton from "./ContinueButton"; // Certifique-se de que o caminho está correto

export default function CardRequestPinScreen({ navigation }) {
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Função para controlar a digitação do PIN
  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Mover o foco para o próximo campo automaticamente
    if (value && index < pinRefs.length - 1) {
      pinRefs[index + 1].current.focus(); // Foca no próximo campo
    } else if (index === pinRefs.length - 1 && value) {
      Keyboard.dismiss(); // Fechar o teclado ao completar o PIN
    }
  };

  // Verifica se todos os dígitos foram preenchidos
  const isPinComplete = pin.every((digit) => digit !== "");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Confirme seu PIN</Text>

          <View style={styles.pinContainer}>
            {pin.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.pinInput}
                value={digit}
                onChangeText={(value) => handlePinChange(value, index)}
                maxLength={1}
                keyboardType="numeric"
                ref={pinRefs[index]}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace" && index > 0 && !digit) {
                    pinRefs[index - 1].current.focus(); // Foca no campo anterior ao apagar
                  }
                }}
              />
            ))}
          </View>

          {/* Botão "Continuar" fixo na parte inferior */}
          <ContinueButton
            onPress={() => {
              if (isPinComplete) {
                navigation.navigate("CardRequestConfirmation"); // Navega para a próxima tela
              }
            }}
            disabled={!isPinComplete} // Desativa o botão se o PIN não estiver completo
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  pinInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    width: 40,
    fontSize: 24,
    textAlign: "center",
  },
});
