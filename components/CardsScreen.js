import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

export default function CardsScreen({ navigation }) {
  const [physicalModalVisible, setPhysicalModalVisible] = useState(false); // Estado para o modal do cartão físico
  const [virtualModalVisible, setVirtualModalVisible] = useState(false); // Estado para o modal do cartão virtual

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("Home");
            }
          }}
        >
          <Text style={styles.backText}>{"<"} Home</Text>
        </TouchableOpacity>

        {/* Cartão Físico */}
        <View style={styles.cardSection}>
          <Text style={styles.cardTitle}>Cartão físico</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Nome Sobrenome</Text>
            <Text style={styles.cardNumber}>**** 123</Text>
            <TouchableOpacity
              style={styles.viewMore}
              onPress={() => navigation.navigate("PhysicalCard")} // Navega para a tela de detalhes do Cartão Físico
            >
              <Text style={styles.viewMoreText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPhysicalModalVisible(true)} // Abre o modal do cartão físico
          >
            <Text style={styles.buttonText}>+ Pedir cartão físico</Text>
          </TouchableOpacity>
        </View>

        {/* Cartão Virtual */}
        <View style={styles.cardSection}>
          <Text style={styles.cardTitle}>Cartão virtual</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Apelido</Text>
            <Text style={styles.cardNumber}>**** 101</Text>
            <TouchableOpacity
              style={styles.viewMore}
              onPress={() => navigation.navigate("VirtualCard")} // Navega para a tela de detalhes do Cartão Virtual
            >
              <Text style={styles.viewMoreText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVirtualModalVisible(true)} // Abre o modal do cartão virtual
          >
            <Text style={styles.buttonText}>+ Gerar cartão virtual</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Cartão Físico */}
        <Modal
          transparent={true}
          visible={physicalModalVisible}
          animationType="slide"
          onRequestClose={() => setPhysicalModalVisible(false)} // Fecha o modal se clicar fora
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                Gostaria de solicitar seu primeiro cartão físico?
              </Text>
              <Text style={styles.modalMessage}>
                Seus 5 primeiros cartões são gratuitos. A partir disso, será
                cobrada uma taxa de R$ 19,90 para gerar cada cartão.
                {"\n"}
                {"\n"}
                Seu novo cartão chegará entre 10 a 20 dias úteis, dependendo da
                região de entrega.
              </Text>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => {
                  setPhysicalModalVisible(false); // Fecha o modal
                  navigation.navigate("CardRequestStep1"); // Navega para a tela de CEP
                }}
              >
                <Text style={styles.primaryButtonText}>
                  Estou ciente e quero solicitar meu primeiro cartão
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => setPhysicalModalVisible(false)} // Fecha o modal ao cancelar
              >
                <Text style={styles.secondaryButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal Cartão Virtual */}
        <Modal
          transparent={true}
          visible={virtualModalVisible}
          animationType="slide"
          onRequestClose={() => setVirtualModalVisible(false)} // Fecha o modal se clicar fora
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                Gostaria de gerar um cartão virtual?
              </Text>
              <Text style={styles.modalMessage}>
                Seu cartão virtual pode ser usado para compras online e pode ser
                cancelado ou gerado novamente a qualquer momento.
              </Text>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => {
                  setVirtualModalVisible(false); // Fecha o modal
                  navigation.navigate("CardVirtualName"); // Navega para a tela de nome do cartão virtual
                }}
              >
                <Text style={styles.primaryButtonText}>
                  Gerar cartão virtual
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => setVirtualModalVisible(false)} // Fecha o modal ao cancelar
              >
                <Text style={styles.secondaryButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSection: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    color: "#999",
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewMore: {
    padding: 10,
  },
  viewMoreText: {
    color: "#ff3366",
  },
  button: {
    backgroundColor: "#ff3366",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semi-transparente
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
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
    color: "#ff3366",
    fontWeight: "bold",
  },
});
