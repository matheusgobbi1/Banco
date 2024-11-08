import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ContinueButton from "./ContinueButton"; // Certifique-se de que o caminho está correto
import { Ionicons } from "@expo/vector-icons"; // Ícone para o botão de voltar

const estados = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export default function CardRequestStep3Screen({ navigation, route }) {
  const { fullAddress } = route.params; // Recebe o endereço completo passado da tela anterior
  const [selectedState, setSelectedState] = useState(null);

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
          <Text style={styles.title}>Confirme o Estado</Text>

          <FlatList
            data={estados}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.stateItem}
                onPress={() => setSelectedState(item)}
              >
                {/* Colocando o círculo antes do nome do estado */}
                <View
                  style={[
                    styles.radioCircle,
                    selectedState === item && styles.selectedRadio,
                  ]}
                />
                <Text style={styles.stateText}>{item}</Text>
              </TouchableOpacity>
            )}
          />

          <ContinueButton
            onPress={() => {
              if (selectedState) {
                const fullAddressWithState = `${fullAddress}, ${selectedState}`; // Anexa o estado ao endereço completo
                navigation.navigate("CardRequestConfirmAddress", {
                  fullAddress: fullAddressWithState,
                }); // Passa o endereço completo com estado
              }
            }}
            disabled={!selectedState} // Desativa o botão se nenhum estado for selecionado
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
  stateItem: {
    flexDirection: "row",
    justifyContent: "flex-start", // Posiciona os itens lado a lado
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  stateText: {
    fontSize: 16,
    marginLeft: 10, // Adiciona espaço entre o círculo e o nome do estado
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff3366",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    backgroundColor: "#ff3366",
  },
});
