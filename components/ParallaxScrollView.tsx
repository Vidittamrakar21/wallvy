import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme , TextInput , Text} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { View, type ViewProps , ScrollView , Image} from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HEADER_HEIGHT = 170;

type Props = PropsWithChildren<{

  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,

  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>

     <View style={styles.search}>
     <FontAwesome name="search" size={22} style={styles.icon} color="black" />

      <TextInput style={styles.bar} placeholder='&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for photos'/>
     </View>
      <ScrollView horizontal>
        
      <Text style={styles.card1}>Nature</Text>
      <Text style={styles.card}>Dark</Text>
      <Text style={styles.card}>Aesthetic</Text>
      <Text style={styles.card}>Illustration</Text>
      <Text style={styles.card}>City</Text>
      <Text style={styles.card}>Sports</Text>
      <Text style={styles.card}>Beach</Text>
      
      </ScrollView>   

          
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  header: {
    height: 170,
   
    overflow: 'hidden',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    overflow: 'hidden',
    backgroundColor: "#FAF7F0"
  },
  cont: {
    backgroundColor:"pink",
    height: 200,
    width: 380,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 20
  },
  card: {
  
    height: 35,
    minWidth: 20,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 10,
    marginRight:3,
    backgroundColor: "#FFD18E",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    

  },
  card1: {
  
    height: 35,
    minWidth: 20,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight:3,
    backgroundColor: "#FFD18E",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 7
  },
  bar:{
    height: 50,
    width: 360,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 0.4,
    borderColor: "gray"
  },
  search:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 60,
    width: 380
  },
  icon:{
    top: 32,
    left: 25,
    zIndex:10,
    position: "absolute",
   
  }


});
