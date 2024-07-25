import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {NativeComponentType} from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {RootStackParamList} from './types';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;
//ekran bileşenlerine geçerli olan props'ları tip güvenliğini sağlamak için kullanılır

function Second({navigation, route}: Props) {
  const {userName} = route.params;

  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.text}>Hello, {userName}</Text>
      <Button title="go Back" onPress={() => navigation.goBack()}></Button>
    </SafeAreaView>
  );
}

export default Second;

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
