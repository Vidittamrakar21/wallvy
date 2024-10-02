import { Image, StyleSheet, Platform } from 'react-native';
import { View, type ViewProps } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#151718', dark: '#151718' }}
     >
     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/1.jpg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/2.jpeg")}></Image>
     </View>

     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/a9.jpeg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/a10.jpg")}></Image>
     </View>

     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/a11.jpg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/a12.jpeg")}></Image>
     </View>
     
     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/7.jpeg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/8.jpeg")}></Image>
     </View>

     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/a1.jpeg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/a2.jpeg")}></Image>
     </View>

     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/a3.jpeg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/a4.jpeg")}></Image>
     </View>

     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/a5.jpeg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/a6.jpg")}></Image>
     </View>

     <View  style = {styles.container}>
     <Image style={styles.card} source={require("../../assets/images/a7.jpeg")}></Image>
     <Image style={styles.card} source={require("../../assets/images/a8.jpeg")}></Image>
     </View>
   
    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  
    height: 200,
    width: 380,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10
  },
  card: {
    backgroundColor:"red",
    height: 200,
    width: 170,
    borderRadius: 15
  }
});
