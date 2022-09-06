import React, { useState, useEffect } from 'react';
import { Button ,Icon,Image} from "@rneui/themed";
import { StyleSheet, Text, View ,TextInput} from 'react-native';
// import { CheckBox } from 'react-native-elements'
import{db,auth} from './../../firbase-confing'
import {

  onAuthStateChanged,

  createUserWithEmailAndPassword,

} from "firebase/auth"
import {setDoc,doc } from "firebase/firestore"

function Rigester() {
  // const [initializing,setinitializing] = useState(true)
  // const [user,setuser] = useState()
  const [email,setEmail] = useState("")
  const [FirstName,setFirstName] = useState("")
  const [LastName,setLastName] = useState("")
  const [password,setPassword] = useState("")
  const [emailError,setEmailError]= useState("")
  const [passwordError,setPasswordError]= useState("")
  const [FirstNameError,setFirstNameError] = useState("")
  const [LastNameError,setLastNameError] = useState("")




  useEffect(()=>{
    const subscriber = onAuthStateChanged(auth, user => {
  
      if(user){

      navigation.navigate("Home")

      }

    });
    return subscriber;
  },[]);




  const handleSubmit = () => {
    //handleSignUp()
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
    if(FirstName.length == 0){
      setFirstNameError("First Name is Required")
    }else{
      setFirstNameError("")
    }
    if(LastName.length == 0){
      setLastNameError("Last Name is Required")
    }else{
      setLastNameError("")
    }
}

// const handleSignUp = () => {
//   auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(userCredentials => {
//       const user = userCredentials.user;
//       console.log('Registered with:', user.email);
//     })
//     .catch(error => alert(error.message))
// }
const handleSignUp = () => {
console.log(email, password)
  createUserWithEmailAndPassword(auth, email, password)

      .then((userCredentials) => {

        const user = userCredentials.user;

        setDoc(doc(db, "users", `${email.toLowerCase()}`),{

          FirstName: FirstName,

          LastName : LastName,

          Email: email,

        }).then(()=>{

          console.log("data submitted");

        }).catch((error)=>{

          console.log(error.messege)

        });

        console.log('signed up with : ', email);

      }).catch(error => alert(error.message));

  }



    return (
        <>
<View >
<View>
    <Text style={styles.header}>Continue with Email</Text>
    <TextInput style={styles.input}
  placeholder='First Name'
  onChangeText={(text) => setFirstName(text)} 
  value={FirstName}
  onBlur={handleSubmit}
/>
<Text style={{color: 'red', fontSize: 20}}> {FirstNameError}  </Text> 

    <TextInput style={styles.input}
  placeholder='Last Name'
  onChangeText={(text) => setLastName(text)} 
  value={LastName}
  onBlur={handleSubmit}

/>
<Text style={{color: 'red', fontSize: 20}}> {LastNameError}  </Text> 

    <TextInput style={styles.input}
  placeholder='Email'
  value={email}
  onChangeText={(text) => setEmail(text)}
  onBlur={handleSubmit}
/>
<Text style={{color: 'red', fontSize: 20}}> {emailError}  </Text> 

    <TextInput style={styles.input}
  placeholder='Choose Password '
  value={password}
  onChangeText={(text) => setPassword(text)} 
  secureTextEntry
  onBlur={handleSubmit}
/>
<Text style={{color: 'red', fontSize: 20}}> {passwordError}  </Text> 

<Text style={styles.text}>your password must be at least 6 characters</Text>
{/* <CheckBox
  title='yes i want to recive offers and discounts'
//   checked= {state.checked}
/> */}
</View>

</View>
{/* <Button style={styles.btn} color="warning" size="lg">Create An Account</Button> */}
<Button onPress={()=>handleSignUp()}
              title={'Create An Account'}
              color="warning"
              style={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 47,
                borderRadius: 10,

              }}
            />
            <Text style={styles.gry}>By creating your account you agree to the <Text style={styles.orng}>Privacy pollicy</Text> and</Text>
            <Text style={styles.gry}>to the <Text style={styles.orng}>tearms of use</Text></Text>
            
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
    color:"orange"
},
gry:{
    color:"gray",
    paddingHorizontal: 12

}
    
    

  
  });

export default Rigester;
