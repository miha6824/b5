import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text>Hello 👋🏻</Text>
          <Text>Christie Doe</Text>
        </View>
        <Image 
          source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Mask%20Group.png?v=1719909507967' }} 
          style={styles.headerImage}
        />
      </View>

      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.largeImageContainer}>
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2041.png?v=1719910929558' }} 
              style={styles.largeImage}
            />
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Group%20157.png?v=1719910448940' }} 
              style={styles.smallImage}
            />
          </View>
          <View style={styles.largeImageContainer}>
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2041.png?v=1719910929558' }} 
              style={styles.largeImage}
            />
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Screenshot%202024-07-03%20164858.png?v=1720000204394' }} 
              style={styles.smallImage}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.largeImageContainer}>
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2041.png?v=1719910929558' }} 
              style={styles.largeImage}
            />
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Screenshot%202024-07-03%20165915.png?v=1720000793102' }} 
              style={styles.smallImage}
            />
          </View>
          <View style={styles.largeImageContainer}>
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2041.png?v=1719910929558' }} 
              style={styles.largeImage}
            />
            <Image 
              source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Screenshot%202024-07-03%20165923.png?v=1720000797026' }} 
              style={styles.smallImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.insightsContainer}>
        <View style={styles.insights}>
          <Text>Explore More</Text>
        </View>
        <View style={styles.imagesRow}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2031.png?v=1720000885519' }} 
            style={styles.image}
          />
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2045.png?v=1720000890152' }} 
            style={styles.image}
          />
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Rectangle%2045%20(1).png?v=1720000897817' }} 
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={styles.iconButton}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Vector%20(1).png?v=1720003313019' }} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Account button press */ }} style={styles.iconButton}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Group%20153.png?v=1720003306477' }} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Notifications button press */ }} style={styles.iconButton}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Vector%20(1).png?v=1720003313019' }} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Messages button press */ }} style={styles.iconButton}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Group%20154.png?v=1720003317437' }} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Settings button press */ }} style={styles.iconButton}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Group%20161.png?v=1720003325512' }} 
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={{ uri: 'https://cdn.glitch.global/928b06a7-4328-45ff-8bfb-01b7dda43082/Arrow%201.png?v=1720010790921' }}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <Text style={styles.scanText}>Scan Screen</Text>
    </View>
  );
}

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Scan" component={ScanScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  grid: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeImageContainer: {
    flex: 1,
  },
  largeImage: {
    width: '100%',
    height: 150,
  },
  smallImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  insightsContainer: {
    padding: 16,
  },
  insights: {
    marginBottom: 16,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconButton: {
    padding: 8,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  scanText: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default App;
