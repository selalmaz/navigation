import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

function Profile({navigation}:any) {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title='profile Edit'
      onPress={()=>navigation.navigate('ProfileEdit')}>

      </Button>
    </SafeAreaView>
  );
}

export default Profile;
