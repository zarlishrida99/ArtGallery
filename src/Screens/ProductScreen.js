import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
//Importing Navigation
import { useNavigation } from "@react-navigation/native";
//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Importing Screens
import item from "./data/product";
import CartScreen from "./CartScreen";

const ProductScreen = ({ route, navigation }) => {
  const { id, title, description, image, avgRating, ratings, price, oldPrice } =
    route.params;

  return (
    <ScrollView>
      <View>
        {/* Product Image */}
        <Image style={styles.image} source={image} />

        {/* View in AR */}
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() => alert("Processing...")}
            style={styles.CartButton}
          >
            <Text style={styles.buttontext}>View in AR</Text>
          </TouchableOpacity>
        </View>

        {/* Product Title */}
        <View style={styles.favbar}>
          <Text style={styles.TitleStyle} numberOfLines={3}>
            {title}
          </Text>

          <TouchableOpacity onPress={() => alert("Added to Favorite's list")}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={35}
              color="black"
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Product description */}
        <Text style={styles.descriptionStyle} numberOfLines={10}>
          {description}
        </Text>

        {/* Ratings */}
        <View style={styles.ratingsStyle}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <MaterialCommunityIcons
              key={`${id}-${i}`}
              name={i < Math.floor(avgRating) ? "star" : "star-outline"}
              size={25}
              color="#e47911"
            />
          ))}
          <Text>{ratings}</Text>
        </View>

        {/* Product Price */}
        <Text style={styles.priceStyle}>Price: ${price.toFixed(2)}</Text>

        {/* Add to the Cart button */}
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() => alert("Added to the cart")}
            style={styles.CartButton}
          >
            <Text style={styles.buttontext}>Add to Cart</Text>
          </TouchableOpacity>

          {/* Buy Now Button */}
          <TouchableOpacity
            onPress={() => alert("You are on the Check-out Screen")}
            style={styles.CartButton}
          >
            <Text style={styles.buttontext}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

//Styling ProductScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
  },
  TitleStyle: {
    padding: 10,
    flex: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
  favbar: {
    flexDirection: "row",
    marginRight: 30,
  },
  heartIcon: {
    /// marginLeft: 20,
  },
  image: {
    margin: 5,
    height: 250,
    width: 500,
  },
  descriptionStyle: {
    marginVertical: 10,
    marginLeft: 10,
    lineHeight: 20,
    fontSize: 20,
  },
  ratingsStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginLeft: 10,
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
  },
  CartButton: {
    backgroundColor: "#466152",
    marginVertical: 10,
    height: 45,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
  },
});

export default ProductScreen;
