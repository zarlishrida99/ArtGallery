import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

function ProfileDetails({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.backgroundArea}>
        <View style={{ padding: 20 }}>
          <Text style={styles.LeftSideText}>Username: </Text>
          <Text style={styles.RightSideText}>Art Gallery</Text>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={styles.LeftSideText}>Email Address:</Text>
          <Text style={styles.RightSideText}>zzadmin@admin.com</Text>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={styles.LeftSideText}>Contact Number:</Text>
          <Text style={styles.RightSideText}>+92 90078601</Text>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={styles.LeftSideText}>City:</Text>
          <Text style={styles.RightSideText}>Rawalpindi</Text>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={styles.LeftSideText}>Area Zip Code:</Text>
          <Text style={styles.RightSideText}>46000</Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Edit Profile
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
  LeftSideText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  RightSideText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
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

export default ProfileDetails;
