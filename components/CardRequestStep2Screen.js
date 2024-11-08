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

export default function CardRequestStep2Screen({ navigation }) {
  const [address, setAddress] = useState({
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
  });

  const isAddressComplete = address.rua && address.numero && address.bairro;

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
          <Text style={styles.title}>Digite o endereço completo</Text>

          <TextInput
            style={styles.input}
            placeholder="Rua"
            value={address.rua}
            onChangeText={(text) => setAddress({ ...address, rua: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Número"
            value={address.numero}
            onChangeText={(text) => setAddress({ ...address, numero: text })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Complemento"
            value={address.complemento}
            onChangeText={(text) =>
              setAddress({ ...address, complemento: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Bairro"
            value={address.bairro}
            onChangeText={(text) => setAddress({ ...address, bairro: text })}
          />

          <ContinueButton
            onPress={() => {
              if (isAddressComplete) {
                const fullAddress = `${address.rua}, ${address.numero} - ${address.complemento}, ${address.bairro}`;
                navigation.navigate("CardRequestStep3", { fullAddress }); // Passa o endereço completo para a próxima etapa
              }
            }}
            disabled={!isAddressComplete}
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
    marginBottom: 20,
  },
});
