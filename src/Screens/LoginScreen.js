import React, { useState, useEffect } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

const AdminUser = {
  email: "zzadmin@admin.com",
  password: "zzfyp",
};

function LoginScreen({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  //Login Button handler
  const handleSubmitPress = () => {
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    if (userEmail === AdminUser.email && userPassword === AdminUser.password) {
      setAuthenticated(true);
      navigation.navigate("Home");
    }
  };

  //Forgot Button handler
  const handlefrogetpress = () => {
    navigation.navigate("Welcome");
  };

  return (
    <ImageBackground
      style={styles.LoginScreenBackground}
      source={require("../assets/welcomeS.jpg")}
      blurRadius={3}
    >
      <View style={styles.backgroundArea}>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            placeholder={"Email Address"}
            style={styles.input}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            onChangeText={(userPassword) => setUserPassword(userPassword)}
            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={handlefrogetpress}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          activeOpacity={0.5}
          onPress={handleSubmitPress}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  LoginScreenBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundArea: {
    // position: 'absolute',
    marginTop: 20,
    width: 300,
    height: 400,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C6C7C7",
    opacity: 0.6,
  },
  inputView: {
    height: 50,
    //flex: 1,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    width: 150,
    //marginLeft: 20,
    //  borderColor: "black",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#b52717",
  },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#183A27",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginScreen;
