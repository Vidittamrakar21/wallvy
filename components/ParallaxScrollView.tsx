import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { View, type ViewProps , ScrollView , Image} from 'react-native';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

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

      <ScrollView horizontal>
        
          <Image style={styles.card} source={require("../assets/images/back2.jpg")}></Image>
          <Image style={styles.card} source={require("../assets/images/back1.jpg")}></Image>
          <Image style={styles.card} source={require("../assets/images/img2.jpg")}></Image>
          <Image style={styles.card} source={require("../assets/images/img3.jpg")}></Image>
          {/* <Image style={styles.card} source={require("../assets/images/img4.avif")}></Image> */}
        
      
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
    height: 250,
   
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
    backgroundColor: "#20232A"
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
  
    height: 190,
    width: 320,
    borderRadius: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight:10
  }
});
