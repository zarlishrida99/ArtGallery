import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Improting Screens
import ProductItem from "./ProductItem";
import product from "./data/product";
import { Assets } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  const products = product
  return (
    <View style={styles.container}>
      <View style={[{ flexDirection: "row-reverse" }, styles.headerContainer]}>
        <View style={{ width: 300, height: 50, backgroundColor: "#ffff" }}>
          <View style={styles.wrapper}>
            <View style={styles.searchContainer}>
              <MaterialCommunityIcons
                name="magnify"
                size={24}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Search here..."
              />
            </View>
          </View>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: "#ffff" }}>
          <TouchableOpacity>
            <Image style={styles.image} source={require("../assets/Art.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.page}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: -5,
  },
  header: {
    flexDirection: "row",
  },
  page: {
    padding: 10,
  },
  SearchBarStyle: {
    height: 40,
    width: "90%",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  SettingIcon: {
    // alignSelf: "flex-end",
  },
  image: {
    width: 50,
    height: 50,
  },
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255,255,255,0.9)",
    width: "100%",
    height: 80,
    zIndex: 99,
  },
  searchContainer: {
    //display: 'flex',
    borderWidth: 1,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    borderRadius: 5,
    height: 40,
    marginTop: 10,
    marginLeft: 21,
    marginRight: 21,
  },
  searchIcon: {
    position: "absolute",
    left: 18,
    top: 9,
  },
  textInput: {
    //display: 'flex',
    marginTop: 8,
    marginLeft: 44,
  },
});

export default HomeScreen;
