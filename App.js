import React, { useState } from "react";
import { View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//Importing Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Importing Screens
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import FavoriteScreen from "./src/Screens/FavoriteScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ProductItem from "./src/Screens/ProductItem";
import ProductScreen from "./src/Screens/ProductScreen";
import ProfileDetails from "./src/Screens/ProfileDetails";
import MyOrdersScreen from "./src/Screens/MyOrdersScreen";
import PaymentScreen from './src/Screens/PaymentScreen';
import SupportScreen from './src/Screens/SupportScreen';
import EditProfile from "./src/Screens/EditProfile";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

//HomeTab Stack
const ProductList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hometab"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Productdetailcall"
        component={ProductScreen}
        options={{
          title: "Product Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#7D9189" },
        }}
      />
    </Stack.Navigator>
  );
};

//ProfileTab Stack
const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{
          title: "Profile Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#7D9189" },
        }}
      />
      <Stack.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          title: "My Orders",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#7D9189" },
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          title: "Payment Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#7D9189" },
        }}
      />
      <Stack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{
          title: "Support",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#7D9189" },
        }}
      />
      <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        title: "Edit Profile",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#7D9189" },
      }}
      />
    </Stack.Navigator>
  );
};

//Home Screen Tab Navigator
const Home = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#694fad"
      labelStyle={{ fontSize: 15 }}
      barStyle={{ backgroundColor: "#41B3A3" }}
    >
      <BottomTab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FavoriteTab"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
