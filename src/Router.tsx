import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Member from './pages/member/Member';
import MemberDetail from './pages/member/MemberDetail';
import MemberEdit from './pages/member/MemberEdit';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetail" component={MemberDetail} />
      <Stack.Screen name="MemberEdit" component={MemberEdit} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
