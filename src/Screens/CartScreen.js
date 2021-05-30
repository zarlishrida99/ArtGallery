import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CartScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {/* Header Area*/}
      <View style={styles.headerArea}>
        <MaterialCommunityIcons
          name="cart"
          size={30}
          color="black"
          style={styles.carticon}
        />
        <Text style={styles.heading}>Shopping Cart</Text>
      </View>

      {/* Cart Item Area*/}
      <View style={styles.root}>
        {/* Check Icon*/}
        <TouchableOpacity style={styles.Checkicon}>
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={24}
            color="black"
          />
        </TouchableOpacity>

        {/* Image */}
        <Image source={require("./data/Silence.jpg")} style={styles.image} />

        {/* Product Title */}
        <View style={styles.TitleStyle}>
          <Text style={styles.title}>Always Wear your Crown</Text>

          {/* Product Price */}
          <Text style={styles.priceStyle}>$ 20.98</Text>

          {/* Quantity Selector */}
          <View style={styles.Quantityroot}>
            <TouchableOpacity onPress={onMinus} style={styles.button}>
              <Text style={styles.butonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={onPlus} style={styles.button}>
              <Text style={styles.butonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Remove Icon */}
          <TouchableOpacity style={styles.RemoveIcon}>
            <MaterialCommunityIcons name="delete" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Amount Area*/}
      <View style={styles.AmountRoot}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 60 }}>
            <View style={{ width: 32, height: 32 }}>
              <MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" />
            </View>
          </View>
          <View style={styles.Voucher}>
            <Text>Voucher</Text>
            <View style={{ paddingRight: 20 }}>
              <TextInput
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: "#f0f0f0",
                  height: 25,
                  borderRadius: 4,
                }}
                placeholder="Enter voucher code"
                value={""}
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 60 }}>
            <TouchableOpacity style={{ width: 32, height: 32 }}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexGrow: 1,
              flexShrink: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Select All</Text>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 30,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8f8f8f" }}>SubTotal: </Text>
              <Text>$ 20.98</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    backgroundColor: "#EEEEEE",
  },
  headerArea: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 25,
    height: 90,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
    //marginBottom: 10,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  carticon: {
    marginTop: 30,
    paddingLeft: 20,
  },
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#7D9189",
    //marginVertical: 5,
    marginTop: 10,
  },
  Checkicon: {
    marginLeft: 10,
    marginTop: 50,
  },
  image: {
    flex: 3,
    height: 150,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 10,
  },
  TitleStyle: {
    padding: 10,
    flex: 3,
    width: 100,
  },
  title: {
    fontSize: 20,
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  RemoveIcon: {
    marginLeft: 120,
    marginTop: 20,
  },
  Quantityroot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginVertical: 5,
  },
  button: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  butonText: {
    fontSize: 20,
  },
  quantity: {
    color: "#007eb9",
  },
  AmountRoot: {
    marginLeft: 20,
    marginTop: 20,
  },
  Voucher: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CartScreen;
