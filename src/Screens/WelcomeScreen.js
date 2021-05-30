import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.WelcomeScreenBackground}
      source={require("../assets/welcomeS.jpg")}
      blurRadius={1}
    >
      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.space} />

      <TouchableOpacity
        style={styles.SignupButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  WelcomeScreenBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginButton: {
    width: "50%",
    backgroundColor: "#183A27",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  space: {
    width: 20,
    height: 10,
  },
  SignupButton: {
    width: "50%",
    backgroundColor: "#466152",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
});

export default WelcomeScreen;
