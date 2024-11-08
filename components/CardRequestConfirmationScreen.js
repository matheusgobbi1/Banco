import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function CardRequestConfirmationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/guitar.jpg")} // Certifique-se de que o caminho da imagem está correto
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          {/* Texto principal */}
          <Text style={styles.title}>Seu cartão chegará em breve!</Text>

          {/* Botão "Ir para meus cartões" */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate("Cards")} // Navega para a tela de Meus Cartões
          >
            <Text style={styles.primaryButtonText}>Ir para meus cartões</Text>
          </TouchableOpacity>

          {/* Botão "Voltar para Home" */}
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Home")} // Navega para a Home
          >
            <Text style={styles.secondaryButtonText}>Voltar para home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semi-transparente para destacar o texto
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  primaryButton: {
    backgroundColor: "#ff3366", // Cor de fundo do botão principal
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
    width: "80%", // Define a largura do botão
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryButton: {
    paddingVertical: 15,
    width: "80%",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
