import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function CardVirtualCreatedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/guitar.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Seu cartão virtual foi criado!</Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate("VirtualCard")}
          >
            <Text style={styles.primaryButtonText}>Acessar cartão virtual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Home")} // Navega de volta para a home
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
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Deixa o fundo mais escuro para o texto ficar legível
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#ff3366",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryButton: {
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
