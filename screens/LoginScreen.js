import { View, Text,StyleSheet,Pressable } from 'react-native';
import React, {useState} from 'react';
import { Button } from '@rneui/base';
import { Input } from '@rneui/themed';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = ({navigation}) =>  {

  //Variables
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  //Fonctions
  const signIn = () => {
    console.log("login");
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);

      // Load chat page
      navigation.replace("Chat");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  return (
    <View style={styles.container}>
   
        <Input
         placeholder="Enter your email"
         label="Email"
         value={email}
         onChangeText={setEmail}
         leftIcon={{ type: "material", name: "email" }}
        />
        <Input
         placeholder="Enter your password"
         label="Password"
         value={password}
         onChangeText={setPassword}
         leftIcon={{ type: "material", name: "lock" }}
        />

        <View>

         <Button 
            title="Se connecter"  
            style={styles.button} 
            onPress={signIn}
            />
         <Pressable
           onPress={() => navigation.navigate("Registration") }
         >
           <Text style={styles.text}>
             Inscrivez-vous
            </Text>
         </Pressable>

        </View>
        

     
    

  </View>


  )
}

export default LoginScreen

const styles = StyleSheet.create({
  button: {
    width: 150,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
  },
  text: { padding: 10},
});