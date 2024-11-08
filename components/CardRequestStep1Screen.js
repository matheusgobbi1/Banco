import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import ContinueButton from "./ContinueButton";
import { Ionicons } from "@expo/vector-icons"; // Ícone para o botão de voltar

export default function CardRequestStep1Screen({ navigation }) {
  const [cep, setCep] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Inserir CEP</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
            Onde você quer receber seu novo cartão?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
            maxLength={8}
          />

          <ContinueButton
            onPress={() => {
              if (cep.length === 8) {
                navigation.navigate("CardRequestStep2"); // Passa o CEP para a próxima etapa
              }
            }}
            disabled={cep.length !== 8}
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    fontSize: 18,
    marginBottom: 30,
  },
});
