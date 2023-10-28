import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  DestinationContextProvider,
  OriginContextProvider,
} from './src/Contrext/Context';
import RootNavigation from './src/Navigation/RootNavigation';
import Homescreen from './src/Screens/Homescreen';

export default function App() {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigation />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
