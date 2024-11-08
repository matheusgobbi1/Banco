import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function CardVirtualLoadingScreen({ navigation }) {
  useEffect(() => {
    // Simulando um tempo de processamento para criar o cartão
    setTimeout(() => {
      // Após o "processamento", navega para a tela de confirmação de criação do cartão
      navigation.navigate("CardVirtualCreated");
    }, 3000); // 3 segundos de espera
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ff3366" />
        <Text style={styles.loadingText}>Criando seu cartão virtual...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: "#333",
  },
});
