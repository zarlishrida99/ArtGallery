import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function SignupScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.SignUpScreenBackground}
      source={require("../assets/welcomeS.jpg")}
      blurRadius={3}
    >
      <View style={styles.backgroundArea}>
        <View>
          <Text style={styles.TextinputText1}>First Name:</Text>
          <TextInput
            placeholder={"Enter Your First Name"}
            style={styles.inputView1}
          />

          <Text style={styles.TextinputText2}>Last Name:</Text>
          <TextInput
            placeholder={"Enter Your Last Name"}
            style={styles.inputView2}
          />

          <Text style={styles.TextinputText1}>Email Address:</Text>
          <TextInput
            placeholder={"Enter Your Email Address"}
            style={styles.inputView1}
          />

          <Text style={styles.TextinputText2}>Password:</Text>
          <TextInput
            placeholder={"Enter Your Password"}
            secureTextEntry={true}
            style={styles.inputView2}
          />
        </View>

        <TouchableOpacity
          style={styles.SignUpBtn}
          onPress ={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  SignUpScreenBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundArea: {
    position: "absolute",
    marginTop: 20,
    width: 300,
    height: 400,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C6C7C7",
    opacity: 0.6,
  },
  inputView1: {
    padding: 5,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#81636C",
    width: 200,
  },
  inputView2: {
    padding: 5,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#81636C",
    width: 200,
  },
  TextinputText1: {
    marginLeft: 5,
    color: "black",
    fontWeight: "bold",
  },
  TextinputText2: {
    marginLeft: 130,
    color: "black",
    fontWeight: "bold",
  },
  SignUpBtn: {
    width: "60%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#183A27",
  },
  SignUpText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SignupScreen;
