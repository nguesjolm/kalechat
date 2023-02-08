import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '@rneui/base';
import { Input } from '@rneui/themed';

function RegistrationScreen () {
  return (
    <View style={styles.loginform}>
    <Input
      placeholder="Enter your name"
      label="Name"
      leftIcon={{ type: "material", name: "badge" }}

    />
    <Input
      placeholder="Enter your email"
      label="Email"
      leftIcon={{ type: "material", name: "email" }}

    />
    <Input
      placeholder="Enter your password"
      label="Password"
      leftIcon={{ type: "material", name: "lock" }}

    />
    <Input
      placeholder="Enter your image Url"
      label="Profile Picture"
      leftIcon={{ type: "material", name: "face" }}
    />
    <Button title="register"/>
  </View>

  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginform:{
        marginTop:20
    }
  });
  