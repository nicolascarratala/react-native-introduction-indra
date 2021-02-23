import React from 'react';
//Ract Native Components
import { StyleSheet } from 'react-native';
//React Navigation
import { SafeAreaView } from 'react-native-safe-area-context';
//Components
import HomeButtons from '../components/HomeButtons/homeButtons';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeButtons navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
});

export default Home;