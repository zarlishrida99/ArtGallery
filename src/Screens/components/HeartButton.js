import React, { useState, useEffect } from 'react';

//Importing Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
import HomeScreen from '../HomeScreen';

function HeartButton (){

    const [addedToFavorite,setAddedToFavorite] = useState(false);

    const addToFavorite() {
        setAddedToFavorite(true);
    };

    return (
        <TouchableOpacity
          onPress={addToFavorite}
        >
          <View>
            <Icon
              name={addedToFavorite ? 'heart' : 'heart-o'}
              color={addedToFavorite ? selectedColor : color}
              size={18}
            />
  
            <Icon
              name="heart-o"
              size={18}
              color={color}
              style={[
                { display: addedToFavorite ? 'flex' : 'none' },
                styles.selectedColor,
              ]}
            />
          </View>
        </TouchableOpacity>
      );
}

export default HeartButton;