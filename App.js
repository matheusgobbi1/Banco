import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import CardsScreen from "./components/CardsScreen";
import PhysicalCardScreen from "./components/PhysicalCardScreen";
import VirtualCardScreen from "./components/VirtualCardScreen";
import CardRequestStep1Screen from "./components/CardRequestStep1Screen";
import CardRequestStep2Screen from "./components/CardRequestStep2Screen";
import CardRequestStep3Screen from "./components/CardRequestStep3Screen";
import CardRequestConfirmAddressScreen from "./components/CardRequestConfirmAddressScreen";
import CardRequestPinScreen from "./components/CardRequestPinScreen";
import CardRequestConfirmationScreen from "./components/CardRequestConfirmationScreen";
import CardVirtualNameScreen from "./components/CardVirtualNameScreen";
import CardVirtualPinScreen from "./components/CardVirtualPinScreen";
import CardVirtualLoadingScreen from "./components/CardVirtualLoadingScreen"; // Nova tela de carregamento
import CardVirtualCreatedScreen from "./components/CardVirtualCreatedScreen"; // Nova tela de confirmação de criação
import LoginScreen from "./components/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cards" component={CardsScreen} />
            <Stack.Screen name="PhysicalCard" component={PhysicalCardScreen} />
            <Stack.Screen name="VirtualCard" component={VirtualCardScreen} />
            <Stack.Screen
              name="CardRequestStep1"
              component={CardRequestStep1Screen}
            />
            <Stack.Screen
              name="CardRequestStep2"
              component={CardRequestStep2Screen}
            />
            <Stack.Screen
              name="CardRequestStep3"
              component={CardRequestStep3Screen}
            />
            <Stack.Screen
              name="CardRequestConfirmAddress"
              component={CardRequestConfirmAddressScreen}
            />
            <Stack.Screen
              name="CardRequestPin"
              component={CardRequestPinScreen}
            />
            <Stack.Screen
              name="CardRequestConfirmation"
              component={CardRequestConfirmationScreen}
            />
            <Stack.Screen
              name="CardVirtualName"
              component={CardVirtualNameScreen}
            />
            <Stack.Screen
              name="CardVirtualPin"
              component={CardVirtualPinScreen}
            />
            <Stack.Screen
              name="CardVirtualLoading"
              component={CardVirtualLoadingScreen}
            />
            <Stack.Screen
              name="CardVirtualCreated"
              component={CardVirtualCreatedScreen}
            />
          </>
        ) : (
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
