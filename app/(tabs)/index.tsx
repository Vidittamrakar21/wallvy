import { Image, StyleSheet, Platform } from 'react-native';
import { View, type ViewProps , TextInput , TouchableOpacity} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {


  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FAF7F0', dark: '#FAF7F0' }}
     >
   
         
    

     <View  style = {styles.container}>
     <TouchableOpacity onPress={() => router.push({ pathname: '/ImageDetail', params: { imageUrl: '../../assets/images/1.jpg' } })}>
          <Image style={styles.card} source={require("../../assets/images/1.jpg")}  />
          </TouchableOpacity>
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
  
    height: 260,
    width: 360,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 1
  },
  card: {
    backgroundColor:"red",
    height: 260,
    width: 170,
    borderRadius: 15
  },
  bar:{
    height: 40,
    width: 360,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 15
  }
  

});
