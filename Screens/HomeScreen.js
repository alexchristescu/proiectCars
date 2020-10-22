import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { Icon } from 'react-native-elements';
const HomeScreen = ({navigation}) => {
  return (
      <View><Icon
          name='g-translate'
          color='#00aced' />

      <Button
      onPress={() => navigation.navigate("LogIn")}
      title="LogIn" />
          <Button
              onPress={() => navigation.navigate("Main")}
              title="Main" />
          <Button
              onPress={() => navigation.navigate("Filter")}
              title="Filter" />
          <Button
              onPress={() => navigation.navigate("CarSize")}
              title="CarSize" />
      </View>
  )
};

const styles = StyleSheet.create({});

export default HomeScreen;
