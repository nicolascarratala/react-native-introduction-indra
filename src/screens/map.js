import React from 'react';
import MapData from '../components/MapData/mapData';
import { SafeAreaView } from 'react-native-safe-area-context';


const Map = ({ navigation }) => {
  return (
    <SafeAreaView >
        <MapData/>
    </SafeAreaView>
  );
}

export default Map;