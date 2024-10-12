import React from 'react';
import { View, Image, StyleSheet , Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ImageDetail() {

    type srctype = {
        imageUrl: string
    }
    
    const { imageUrl }:srctype = useLocalSearchParams();

  return (
    <View style={styles.container}>
    <View style={styles.box}>
      <Image source={require("../assets/images/1.jpg")} style={styles.fullImage} />
    </View>

    <View style={styles.iconbox} >
    <View style={styles.icon}>
    <Feather name="download" size={24} color="black" />
    </View>
    <View style={styles.icon}>
    <FontAwesome name="share" size={24} color="black" />
    </View>
    <View style={styles.ico}>
        <Text>Save</Text>
    </View>
    </View>
    
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#FAF7F0"
  },
  box:{
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 450,
    width: 300,
    // borderRadius: 20,
    marginTop: 50
  },

  fullImage: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
    borderRadius: 20
  },
  iconbox:{
    maxHeight: 80,
    width: 330,
    // borderWidth: 2,
    marginTop: 40,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // Shadow for Android
    elevation: 6
    
  },
  icon:{
    maxHeight: 60,
    maxWidth: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    // backgroundColor: "#FFD18E",
   
  },

  ico:{
   height: 50,
    maxWidth: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    backgroundColor: "#FFD18E",
   
  }
});
