import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Picka</Text>
    
    </View>
  )
}

export default index



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });