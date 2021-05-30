import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

function MyOrdersScreen({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.heading}>Past Orders</Text>
      <TouchableOpacity
        style={{
           flexDirection: "row",
          marginTop: 10,
          height: 120,
          backgroundColor: "#7D9189",
          borderRadius: 20,
        }}
        onPress ={() => navigation.navigate("ProductList")}
      >
        <Text
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginRight: 50,
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
            textAlign: 'center',
          }}
        >
          Orangani Store - Lahore {"\n"}
          9/07/2021 {"\n"} {"\n"}
          {"Click to Reorder"}
        </Text>
        <Text></Text>
        <Text style={styles.Ordertext}> Rs. 3000</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
           flexDirection: "row",
          marginTop: 10,
          height: 120,
          backgroundColor: "#7D9189",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginRight: 50,
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
            textAlign: 'center',
          }}
        >
          Raja bazar - Rawalpindi {"\n"}
          9/07/2021 {"\n"} {"\n"}
          {"Click to Reorder"}
        </Text>
        <Text></Text>
        <Text style={styles.Ordertext}> Rs. 6000</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    backgroundColor: "#EEEEEE",
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
    //marginBottom: 10,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  Ordertext: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});

export default MyOrdersScreen;
