import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from "@env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [saldo, setSaldo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // Função para buscar o saldo da API
  const fetchSaldo = async () => {
    try {
      const jsonString = await AsyncStorage.getItem("user_data");
      const userData = JSON.parse(jsonString);

      console.log(userData);
      setSaldo(userData.balance);
      setUserData(userData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    //try {
    //  const token = await SecureStore.getItemAsync("access_token");
    //  if (!token) {
    //    throw new Error("Token não encontrado");
    //  }
    //
    //  const response = await axios.get(`${BASE_URL}me`, {
    //    headers: {
    //      Authorization: `Bearer ${token}`,
    //    },
    //  });
    //
    //  if (response.status === 200) {
    //    setSaldo(response.data.data.data?.balance);
    //    setUserData(response.data.data.data);
    //  } else {
    //    Alert.alert("Erro", "Não foi possível buscar o saldo.");
    //  }
    //} catch (error) {
    //  console.error(error);
    //  Alert.alert("Erro", "Ocorreu um erro ao buscar o saldo.");
    //} finally {
    //  setLoading(false);
    //}
  };

  useEffect(() => {
    fetchSaldo();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Olá, <Text style={styles.userName}>{userData?.name}!</Text>
          </Text>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Saldo */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Saldo</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#ff3366" />
          ) : (
            <Text style={styles.balanceAmount}>{saldo}</Text>
          )}
        </View>

        {/* Serviços */}
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Serviços</Text>
          <View style={styles.services}>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Antecipar Royalties</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Receber Royalties</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Direitos Fenomecânicos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Parcerias</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Meus Cartões */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("Cards")}
          >
            <Text style={styles.cardText}>Meus Cartões</Text>
          </TouchableOpacity>
        </View>

        {/* Empréstimo */}
        <View style={styles.loanContainer}>
          <Text style={styles.loanTitle}>Empréstimo Disponível até</Text>
          <Text style={styles.loanAmount}>R$ 30.000,00</Text>
        </View>

        {/* Novidades */}
        <View style={styles.newsContainer}>
          <Text style={styles.sectionTitle}>Novidades da Best Play</Text>
          <View style={styles.newsItems}>
            <TouchableOpacity style={styles.newsItem}>
              <Text style={styles.newsTitle}>Comunidade Música Digital</Text>
              <Text style={styles.newsButton}>Saiba Mais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsItem}>
              <Text style={styles.newsTitle}>Cresça no Spotify</Text>
              <Text style={styles.newsButton}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ff3366",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#ff3366",
    paddingTop: 40,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 18,
    color: "#fff",
  },
  userName: {
    fontWeight: "bold",
  },
  notificationIcon: {
    padding: 10,
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: "#666",
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },
  servicesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceItem: {
    alignItems: "center",
    width: 60,
  },
  serviceText: {
    fontSize: 14,
    color: "#333",
  },
  cardsContainer: {
    padding: 20,
  },
  cardButton: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  cardText: {
    color: "#333",
    fontSize: 16,
  },
  loanContainer: {
    padding: 20,
  },
  loanTitle: {
    fontSize: 16,
    color: "#666",
  },
  loanAmount: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
  newsContainer: {
    padding: 20,
  },
  newsItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newsItem: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsButton: {
    color: "#ff3366",
    fontWeight: "bold",
  },
});
