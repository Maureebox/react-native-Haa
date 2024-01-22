import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'one',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="font" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="proflie"
        options={{
          tabBarLabel: 'Proflie',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="star" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: 'x2',
          tabBarIcon: ({ color, size }) => (

            <MaterialCommunityIcons name="map-marker-star" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="we"
        options={{
          tabBarLabel: 'WE',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="key-star" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="kickstarter" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
  );
};

export default _layout