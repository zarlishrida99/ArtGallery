import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FavoriteScreen({ navigation }) {
  //const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.headerArea}>
        <MaterialCommunityIcons
          name="cards-heart"
          size={35}
          color="black"
          style={styles.heartIcon}
        />
        <Text style={styles.heading}>Favorite Items</Text>
      </View>
      <TouchableOpacity
        style={styles.root}
        onPress={() => navigation.navigate("ProductList")}
      >
        {/* Product Image */}
        <Image style={styles.image} source={require("./data/autum.jpg")} />

        {/* Product Title */}
        <View style={styles.TitleStyle}>
          <Text style={styles.title}>Autumn is a second Spring</Text>

          {/* Ratings */}
          <View style={styles.ratingsStyle}>
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <Text>1325</Text>
          </View>

          {/* Product Price */}
          <Text style={styles.priceStyle}>$ 20.98</Text>
          <MaterialCommunityIcons
            name="cards-heart"
            size={35}
            color="#E12B2B"
            style={styles.heart}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.root}
        onPress={() => navigation.navigate("ProductList")}
      >
        {/* Product Image */}
        <Image style={styles.image} source={require("./data/queen.jpg")} />

        {/* Product Title */}
        <View style={styles.TitleStyle}>
          <Text style={styles.title}>Always Wear your Crown</Text>

          {/* Ratings */}
          <View style={styles.ratingsStyle}>
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <MaterialCommunityIcons
              style={styles.star}
              name={"star"}
              size={20}
              color="#e47911"
            />
            <Text>1325</Text>
          </View>

          {/* Product Price */}
          <Text style={styles.priceStyle}>$ 20.98</Text>
          <MaterialCommunityIcons
            name="cards-heart"
            size={35}
            color="#E12B2B"
            style={styles.heart}
          />
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#fff",
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
  heartIcon: {
    marginTop: 30,
    paddingLeft: 20,
  },
  Quotedescription: {
    fontSize: 18,
    color: "#44715F",
    marginBottom: 10,
    marginLeft: 20,
    lineHeight: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
  root: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#7D9189",
    marginVertical: 5,
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    width: "100%",
    height: 80,
    bottom: 0,
    borderTopWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  findHomesButton: {
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
  findHomesButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
    marginLeft: 10,
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
  ratingsStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default FavoriteScreen;
