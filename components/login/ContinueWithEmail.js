import React, { useState, useEffect } from 'react';
import { Button ,Icon,Image} from "@rneui/themed";
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {auth} from './../../firbase-confing';
import{db} from './../../firbase-confing'
import { getAuth, onAuthStateChanged ,signInAnonymously,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { Linking } from 'react-native';


function ContinueWithEmail ({ navigation }) {
  const [initializing,setinitializing] = useState(true)
  const [user,setuser] = useState()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [ emailError, setEmailError]= useState("")
  const [ passwordError, setPasswordError]= useState("")


  useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth, user => {
  
        if(user){
  
        //navigation.navigate("First")
  
        }
  
      })
  
      return unsubscribe
  
    },[])

  const handleSubmit = () => {
    if(email.length == 0){
        setEmailError("Email is Required")
    }else{
        setEmailError("")
    }
    if(password.length == 0){
        setPasswordError("Password is Required")
    }else{
        setPasswordError("")
    }
}
const handleLogin = () => {
console.log(email, password)
  signInWithEmailAndPassword(auth, email, password)

      .then((userCredentials) => {

        const user = userCredentials.user;
        navigation.navigate("Home")


        console.log('signed in with : ', user.email);

      }).catch(error => alert("error.message"));

  }
  const handleSignOut = () => {

    auth

      .signOut()

      .then(() => {
        navigation.navigate("Home")

      //navigation.navigate("ContinueWithEmail");

        console.log("Sign out");

      })

      .catch((error) => alert(error.message));

  };
    return (
        <>
        <View >
        <View>
          
            <Text 
            style={styles.header}>Continue with Email</Text>
            <TextInput style={styles.input}
          placeholder='Email'
          onChangeText={(text) => setEmail(text)}
          value={email}
          onBlur={handleSubmit}
        />
                    <Text style={{color: 'red', fontSize: 20}}> {emailError}  </Text> 

            <TextInput style={styles.input}
          placeholder=' Password '
          onChangeText={(text) => setPassword(text)} 
          value={password}
          onBlur={handleSubmit}

        />
                    <Text style={{color: 'red', fontSize: 20}}> {passwordError}  </Text> 
                    


        </View>
        
        </View>
        <Button onPress={()=>handleLogin()}
                      title={'Login'}
                      color="warning"
                      containerStyle={{
                        width: 300,
                        marginHorizontal: 50,
                        marginVertical: 47,
                        borderRadius: 10,
        
                      }}
                    />
        <Button onPress={()=>handleSignOut()}
                      title={'logOut'}
                      color="warning"
                      containerStyle={{
                        width: 300,
                        marginHorizontal: 50,
                        marginVertical: 47,
                        borderRadius: 10,
        
                      }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    {/* <Text onPress={() => Linking.openURL('/Rigester.js')} style={styles.orng}>Forgot Password ?</Text> */}
                    <Button style={styles.but} onPress={() => navigation.navigate('Rigester')}  color="White" type="outline" size="lg"><Text style={{color: 'orange'}}>create acount</Text></Button>
                    {/* <Text  style={styles.orng}>Create Account</Text> */}

                    </View>
                    <Text>{user?.email}</Text>
                    {/* onPress ={()=>navigation.navigate('Rigester')} */}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   header : {
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 50,
    paddingHorizontal: 12
   },
   input :{
    paddingHorizontal: 12,
    color:"gray"
   }, 
   text :{
    paddingHorizontal: 12,
    color:"gray"
    
   },
   txtMargin2:{
    marginRight:200,
    fontWeight:"bold",
    color:"white",
  },
btn:{
    borderRadius: 200,
    paddingVertical: 200,
    paddingHorizontal: 12,
},
orng:{
    color:"orange",
    paddingHorizontal: 12

},
gry:{
    color:"gray",
    paddingHorizontal: 12

},
but:{
  backgroundColor: 'white',
borderRadius: 0,
borderColor: 'transparent',
borderColor:'white'
}
    
    

  
  });

export default ContinueWithEmail;
