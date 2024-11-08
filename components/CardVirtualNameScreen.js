import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ícone para o botão de voltar

export default function CardVirtualNameScreen({ navigation }) {
  const [cardName, setCardName] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Botão de voltar */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Novo Cartão</Text>
        </View>

        {/* Conteúdo principal da tela */}
        <View style={styles.content}>
          <Text style={styles.title}>Como você quer chamar esse cartão?</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do cartão"
            value={cardName}
            onChangeText={setCardName}
          />
        </View>

        {/* Espaçador flexível para empurrar o botão para baixo */}
        <View style={styles.flexSpacer} />

        {/* Botão Continuar fixado no inferior */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            { backgroundColor: cardName ? "#ff3366" : "#ccc" }, // Habilita o botão quando o nome do cartão é inserido
          ]}
          onPress={() => {
            if (cardName) {
              // Navega para a tela de inserção de PIN do cartão virtual
              navigation.navigate("CardVirtualPin", { cardName });
            }
          }}
          disabled={!cardName} // Desabilita o botão se o nome não for inserido
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    justifyContent: "space-between",
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
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    fontSize: 18,
    marginBottom: 30,
  },
  flexSpacer: {
    flex: 1, // Espaçador flexível para empurrar o botão para baixo
  },
  continueButton: {
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
