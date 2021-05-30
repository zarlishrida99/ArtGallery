import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Importing Navigation
import { useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Importing Screens
import product from "./data/product";
import ProductScreen from "./ProductScreen";

const ProductItem = () => {
  const navigation = useNavigation();

  return (
    <>
      {product.map((product, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Productdetailcall", {
              id: product.id,
              title: product.title,
              description: product.description,
              image: product.image,
              avgRating: product.avgRating,
              ratings: product.ratings,
              price: product.price,
              oldPrice: product.oldPrice,
            });
          }}
          style={styles.root}
        >
          {/* Product Image */}
          <Image style={styles.image} source={product.image} />

          {/* Product Title */}
          <View style={styles.TitleStyle}>
            <Text style={styles.title} numberOfLines={3}>
              {product.title}
            </Text>

            {/* Ratings */}
            <View style={styles.ratingsStyle}>
              {[0, 0, 0, 0, 0].map((el, i) => (
                <MaterialCommunityIcons
                  key={`${product.id}-${i}`}
                  style={styles.star}
                  name={
                    i < Math.floor(product.avgRating) ? "star" : "star-outline"
                  }
                  size={18}
                  color="#e47911"
                />
              ))}
              <Text>{product.ratings}</Text>
            </View>

            {/* Product Price */}
            <Text style={styles.priceStyle}>${product.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

//Styling ProductItem
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#7D9189",
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
  },
  TitleStyle: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
  ratingsStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default ProductItem;
