import { View, Text,StyleSheet,Pressable } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/base';
import { Input } from '@rneui/themed';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';

const RegistrationScreen = ({navigation}) =>  {


  //Les variables
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  //Fonction
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( (userCredential) => {
        //Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: imageURL ? imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
        })
        .then( () => {
           //profile updated
           //...
        } )
        .catch( (error) => {
            //An error occurred
            //...
        });

        navigation.popToTop();
    })
    .catch((error) => {
        //An error
        var errorMessage = error.message;
        alert(errorMessage);
    });
  };

  return (
    <View style={styles.container}>

        <Input
         placeholder=""
         label="Votre nom"
         value={name}
         onChangeText={setName}
         leftIcon={{ type: "material", name: "badge" }}
        />
   
        <Input
         placeholder=""
         value={email}
         onChangeText={setEmail}
         label="Votre email"
         leftIcon={{ type: "material", name: "email" }}
        />

        <Input
         placeholder=""
         value={password}
         onChangeText={setPassword}
         label="Votre mot de passe"
         leftIcon={{ type: "material", name: "lock" }}
         secureTextEntry={true}
        />

        <Input
         placeholder=""
         value={imageURL}
         onChangeText={setImageURL}
         label="Votre Photo"
         leftIcon={{ type: "material", name: "face" }}
        />

        <View>

        <Button
          style={styles.button}
          title="S'inscrire"
          onPress={register}
        />
        

        </View>
        

     
    

  </View>


  )
}

export default RegistrationScreen

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