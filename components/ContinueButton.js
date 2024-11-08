import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function ContinueButton({
  onPress,
  disabled,
  text = "Continuar",
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.buttonDisabled]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30, // Distância do fundo da tela
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: "#ff3366", // Cor de fundo do botão
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc", // Cor de fundo quando o botão está desativado
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
