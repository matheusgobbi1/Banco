import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ContinueButton from "./ContinueButton"; // Certifique-se de que o caminho está correto
import { Ionicons } from "@expo/vector-icons"; // Para o ícone de voltar

export default function CardRequestConfirmAddressScreen({ navigation, route }) {
  const { fullAddress } = route.params; // Recebe o endereço completo como parâmetro

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Selecione o Estado</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
            Confirme o endereço de entrega do novo cartão
          </Text>

          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>{fullAddress}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate("CardRequestStep2")} // Navega de volta para a tela de edição de endereço
            >
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>

          {/* Botão "Continuar" fixo na parte inferior */}
          <ContinueButton
            onPress={() => navigation.navigate("CardRequestPin")} // Navega para a tela de confirmação de PIN
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
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
  addressContainer: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  addressText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  editButton: {
    backgroundColor: "#ff3366",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
