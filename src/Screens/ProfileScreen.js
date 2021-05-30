import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Importing Navigation
import { Assets } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

//Importing Screens

function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <View style={styles.DisplayImage}>
          <Image
            source={require("../assets/pikacho.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.addButton}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="camera" size={24} color="#A4A9A8" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileDetails")}
          style={styles.buttonstyle}
        >
          <Text style={styles.buttontext}>Profile Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MyOrdersScreen")}
          style={styles.buttonstyle}
        >
          <Text style={styles.buttontext}>My Orders</Text>
        </TouchableOpacity>

         
        <TouchableOpacity
          onPress={() => navigation.navigate("SupportScreen")}
          style={styles.buttonstyle}
        >
          <Text style={styles.buttontext}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome")}
          style={styles.buttonstyle}
        >
          <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  DisplayImage: {
    marginTop: 35,
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },
  addButton: {
    backgroundColor: "#515252",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  buttonArea: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
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

export default ProfileScreen;
