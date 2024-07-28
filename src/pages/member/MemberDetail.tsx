import React from 'react';
import { View, Text,Button } from 'react-native';

function memberDetail({navigation}:any){
  return (
    <View>
      <Text>member Detail</Text>
      <Button title='Edit'
      onPress={()=>navigation.navigate('MemberEdit')}></Button>
    </View>
  );
};

export default memberDetail;
