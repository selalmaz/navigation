import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'First'>;

function First({navigation}: Props) {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.text}>Hello First</Text>
      <Button
        title="Go to Second"
        onPress={() =>
          navigation.navigate('Second', {userName: 'Ammo'})
        }></Button>
    </SafeAreaView>
  );
}

export default First;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
