import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '@rneui/base';
import { Input } from '@rneui/themed';

function LoginScreen () {
  return (
    <View >
     <View style={styles.loginform}>
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
        <Button title="Se connecter"/>

     </View>
    

  </View>


  )
}

export default LoginScreen

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
  