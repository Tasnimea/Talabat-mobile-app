import React, { useState, useEffect } from 'react';
import { Button ,Icon,Image} from "@rneui/themed";
import { StyleSheet, Text, View ,TextInput} from 'react-native';
// import { CheckBox } from 'react-native-elements'
import{db,auth} from './../../firbase-confing'

import {

  onAuthStateChanged,

  createUserWithEmailAndPassword,

} from "firebase/auth"

import {updateDoc,doc,getDoc } from "firebase/firestore"

function UserData() {


  const [email,setEmail] = useState("")
  const [FirstName,setFirstName] = useState("")
  const [LastName,setLastName] = useState("")
  const [data,setdata] = useState({})



  useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
          if (user) 
{
    setEmail(user.email)
} 
});

    getUserData();  

    console.log(email)


  },[])

const getUserData = async()=>{
  console.log(email)

    await getDoc(doc(db,`users/${email}`)).then((res)=>{
        setdata(res.data())
      console.log(data)

      })
}


const updateUserData = () => {

    onAuthStateChanged(auth, (user) => {

      if (user) {


    updateDoc(doc(db, "users", `${user.email}`), {

      FirstName: FirstName,

      LastName: LastName,

    }).then(() => {

      setFirstName("")

      setLastName("")
        getUserData()



      }).catch((error) => {

        console.log(error.messege);

      })

    } else {

      console.log("Error updating data")

    }
  });
};




    return (
        <>
<View >
<View>
   <TextInput style={styles.input}
   placeholder={data.FirstName}
  onChangeText={(text) => setFirstName(text)} 
  value={data.FirstName}
/>



    <TextInput style={styles.input}
   placeholder={data.LastName}
  onChangeText={(text) => setLastName(text)} 
  value={data.LastName}

/> 

 <TextInput style={styles.input}
   placeholder={data.Email}
  value={email}
  onChangeText={(text) => setEmail(text)}
/>

   
</View>

</View>
{/* <Button onPress={()=>updateUserData()}
              title={'Update'}
              color="warning"
              style={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 47,
                borderRadius: 10,

              }}
            /> */}
</>


    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
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

export default UserData;
