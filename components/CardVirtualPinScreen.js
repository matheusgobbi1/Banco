import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function CardVirtualPinScreen({ navigation, route }) {
  const { cardName } = route.params;
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinInputRefs = useRef([]);

  const handlePinChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value !== "" && index < 3) {
      pinInputRefs.current[index + 1].focus();
    }
  };

  const handleContinue = () => {
    // Navega para a tela de carregamento após o PIN ser inserido
    navigation.navigate("CardVirtualLoading");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Insira o PIN para o Cartão Virtual</Text>

            <View style={styles.pinContainer}>
              {pin.map((p, index) => (
                <TextInput
                  key={index}
                  style={styles.pinInput}
                  value={p}
                  onChangeText={(value) => handlePinChange(value, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={(ref) => (pinInputRefs.current[index] = ref)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.continueButton,
                { backgroundColor: pin.every((p) => p !== "") ? "#ff3366" : "#ccc" },
              ]}
              onPress={handleContinue}
              disabled={!pin.every((p) => p !== "")}
            >
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    paddingHorizontal: 20,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  pinInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 24,
    textAlign: "center",
    width: 50,
    marginHorizontal: 5,
  },
  continueButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});