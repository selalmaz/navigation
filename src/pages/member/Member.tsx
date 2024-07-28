import React from 'react';
import {View, Text, Button} from 'react-native';

function Member({navigation}: any) {
  return (
    <View>
      <Text>Member</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('MemberDetail')}
      />
    </View>
  );
}

export default Member;
