import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function VirtualCardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>{"<"} Cartão Virtual</Text>
          </TouchableOpacity>
        </View>

        {/* Configurações */}
        <View style={styles.configContainer}>
          <View style={styles.cardIconContainer}>
            <Text style={styles.cardIcon}>💳</Text>
            <Text style={styles.configTitle}>Nome do cartão</Text>
          </View>
          <View style={styles.configIcons}>
            <TouchableOpacity>
              <Text style={styles.configIcon}>👁️</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.configIcon}>🔒</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.configIcon}>⚙️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Detalhes do Cartão */}
        <View style={styles.cardDetailsContainer}>
          <Text style={styles.cardHolderTitle}>Nome</Text>
          <Text style={styles.cardHolder}>Nome Sobrenome</Text>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardInfoLabel}>Número</Text>
            <Text style={styles.cardInfoValue}>**** **** **** 101</Text>
          </View>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardInfoLabel}>Validade</Text>
            <Text style={styles.cardInfoValue}>12/30</Text>
            <Text style={styles.cardInfoLabel}>CVV</Text>
            <Text style={styles.cardInfoValue}>***</Text>
          </View>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardInfoLabel}>Bandeira</Text>
            <Text style={styles.cardInfoValue}>Visa</Text>
            <Text style={styles.cardInfoLabel}>Função</Text>
            <Text style={styles.cardInfoValue}>Crédito pré pago</Text>
          </View>
        </View>

        {/* Saldo disponível */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Saldo disponível</Text>
          <Text style={styles.balanceAmount}>R$ 2.000,00</Text>
        </View>

        {/* Histórico de Transações */}
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Histórico</Text>
          <View style={styles.historyTabs}>
            <TouchableOpacity style={styles.historyTabActive}>
              <Text style={styles.historyTabText}>Últimos 30 dias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.historyTab}>
              <Text style={styles.historyTabText}>Agosto 24</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.historyTab}>
              <Text style={styles.historyTabText}>Julho 24</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.historyTab}>
              <Text style={styles.historyTabText}>Junho 24</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de Transações */}
          <View style={styles.transactionList}>
            <View style={styles.transactionItem}>
              <Text style={styles.transactionType}>Saída</Text>
              <View>
                <Text style={styles.transactionName}>Nome da instituição</Text>
                <Text style={styles.transactionDate}>Hoje às 15h02</Text>
              </View>
              <Text style={styles.transactionAmount}>R$ -32,00</Text>
            </View>

            <View style={styles.transactionItem}>
              <Text style={styles.transactionType}>Entrada</Text>
              <View>
                <Text style={styles.transactionName}>Nome da instituição</Text>
                <Text style={styles.transactionDate}>Ontem às 12h08</Text>
              </View>
              <Text style={styles.transactionAmount}>R$ 532,00</Text>
            </View>

            <View style={styles.transactionItem}>
              <Text style={styles.transactionType}>Saída</Text>
              <View>
                <Text style={styles.transactionName}>Nome da instituição</Text>
                <Text style={styles.transactionDate}>31 ago. às 23h52</Text>
              </View>
              <Text style={styles.transactionAmount}>R$ -19,90</Text>
            </View>

            <View style={styles.transactionItem}>
              <Text style={styles.transactionType}>Entrada</Text>
              <View>
                <Text style={styles.transactionName}>Nome da instituição</Text>
                <Text style={styles.transactionDate}>31 ago. às 14h22</Text>
              </View>
              <Text style={styles.transactionAmount}>R$ 1.234,00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  configContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 30,
    marginRight: 10,
  },
  configTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  configIcons: {
    flexDirection: "row",
  },
  configIcon: {
    marginLeft: 15,
    fontSize: 20,
  },
  cardDetailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  cardHolderTitle: {
    fontSize: 14,
    color: "#999",
    marginBottom: 5,
  },
  cardHolder: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardInfoLabel: {
    fontSize: 14,
    color: "#999",
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
  historyContainer: {
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyTabs: {
    flexDirection: "row",
    marginBottom: 20,
  },
  historyTab: {
    marginRight: 15,
  },
  historyTabActive: {
    backgroundColor: "#ff3366",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 15,
  },
  historyTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  transactionList: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  transactionType: {
    fontWeight: "bold",
    color: "#ff3366",
  },
  transactionName: {
    fontSize: 16,
  },
  transactionDate: {
    fontSize: 14,
    color: "#999",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
