import React from 'react';
//Ract Native Components
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
//Images
import ImageTask from '../../../assets/tareas.png';

const HomeButtons = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity style={ styles.button } onPress={ () => { navigation.push('Tasks') } }>
        <Image style={ styles.tinyLogo } source={ ImageTask } />
        <Text>Tareas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#009eff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 30
  },
  tinyLogo: {
    width: 40,
    height: 60,
    backgroundColor: "#fff"
  }
});

export default HomeButtons;