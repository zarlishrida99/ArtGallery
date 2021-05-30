import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function EditProfile({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.backgroundArea}>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>Userame:</Text>
          <TextInput
            placeholder={"Enter Your First Name"}
            style={styles.inputtext}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>Email Address:</Text>
          <TextInput
            placeholder={"Enter Your Last Name"}
            style={styles.inputtext}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={styles.text}>Contact Number:</Text>
          <TextInput
            placeholder={"Enter Your Email Address"}
            style={styles.inputtext}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={styles.text}>City:</Text>
          <TextInput
            placeholder={"Enter Your Password"}
            secureTextEntry={true}
            style={styles.inputtext}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>Area Zip code:</Text>
          <TextInput
            placeholder={"Enter Your Password"}
            secureTextEntry={true}
            style={styles.inputtext}
          />
        </View>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundArea: {
    marginTop: 30,
    marginLeft: 30,
    width: 300,
    height: 450,
    borderRadius: 20,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#7D9189",
    opacity: 0.6,
  },
  inputtext: {
    padding: 2,
    //marginBottom: 5,
    //borderBottomWidth: 2,
    // borderLeftWidth: 2,
    // borderColor: "#81636C",
    width: 200,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonArea: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonstyle: {
    backgroundColor: "#466152",
    marginVertical: 10,
    height: 45,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
  },
});

export default EditProfile;
