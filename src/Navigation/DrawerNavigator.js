import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Homescreen from '../Screens/Homescreen';
import { Icon } from 'react-native-elements';
import { colors } from '../Global/Styles';
import Request from '../Screens/Request';
import Destination from '../Screens/Destination';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='home'
        component={Homescreen}
        options={{
          title: 'Client',
          drawerIcon: ({ focussed, size }) => {
            return (
              <Icon
                type='material-community'
                name='home'
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name='Request'
        component={Request}
        options={{
          title: 'Requests',
          drawerIcon: ({ focussed, size }) => {
            return (
              <Icon
                type='material-community'
                name='arch'
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name='Destination'
        component={Destination}
        options={{
          title: 'Destination',
          drawerIcon: ({ focussed, size }) => {
            return (
              <Icon
                type='material-community'
                name='arch'
                color={focussed ? '#7cc' : colors.grey2}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
