import { Text, Image,View, StyleSheet , ScrollView ,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Card2 from './Card2';
import { Button } from "@rneui/themed";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { render } from 'react-dom';
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./../../firbase-confing";
import React ,{useEffect,useState} from "react";
export default function AllResturants({ navigation }) {
   // const { height, width } = Dimensions.get('window')
   // const screenWidth=Dimensions.get('window').width;
   // const screenHeight=Dimensions.get('window').height;
   
   
   const [Restrants, setRestrants] = useState([]);


   const getAllResturants= () => {
   
         getDocs(collection(db, "Resturant"))
      
         .then((docSnap) => {
      
            let data = [];
      
            docSnap.forEach((doc) => {
      
            data.push({ ...doc.data(), id: doc.id });
      
            });
      
            setRestrants(data);
      
            })
      
            .catch((error) => {
      
            console.error(error.message);
      
            });
      
      };
      
      useEffect(()=>{
         getAllResturants() ;
         
      },[])
   
   return (
   <>
      <ScrollView>

<View style={{}}>

<View style={{display:'flex',flexDirection:'row', width:388, height:170 , marginTop:5}}>
<View style={{backgroundColor:'lightpurple'}}>
 <Image
      style={{width: 82, height: 133, marginLeft:5, marginTop:5}}
    
         source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMFlE1wtws6j-b_6MS3MftH1PxphdKq_dwQ&usqp=CAU'}}  
      /> 
</View>
<View style={{backgroundColor:'lightpurple'}}>
 <Image
      style={{width: 82, height: 133, marginLeft:8, marginTop:5}}
    
         source={{ uri: 'https://lh3.googleusercontent.com/dveFAQvniEetvETAEI7v0DHFr7ve_gw7DYurF5cP2JMPuKo7Pc3mND3WPNrb8lLTkhg'}}  
      /> 
</View>
<View style={{backgroundColor:'lightpurple'}}>
 <Image
      style={{width: 82, height: 133, marginLeft:8, marginTop:5}}
    
         source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32o8ue9b_3aKF3NBXR2iCDDMuCySSDK1ieQ&usqp=CAU'}}  
      /> 
</View>

<View style={{backgroundColor:'lightpurple'}}>
 <Image
      style={{width: 82, height: 133, marginLeft:8, marginTop:5}}
    
         source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9qlgCHJUaDiv0u2_-ShA_dLMxdxvqOX4Xufdl5F0UoZbl3QRxEkJ8SdCPhdSSBfxCRo&usqp=CAU'}}  
      /> 
</View>

</View>
{/* //////////////////////////// */}
<View style={{display:'flex',flexDirection:'row',}}>

<View style={{marginLeft:10}}>
   <Text style={{ fontSize:20, fontWeight:'bold'}} > All Restaurants </Text>
</View >
<View style={{display:'flex',flexDirection:'row',marginLeft:130, borderTopLeftRadius:5,borderBottomLeftRadius:8, padding:8, borderStyle:'solid',borderWidth:0.7, borderColor:'lightgray'}}>
< FontAwesome5 name="laptop" size={17} style={{ color:'black' }}/>
</View>
<View style={{display:'flex',flexDirection:'row', padding:7, borderStyle:'solid',borderWidth:0.7,borderBottomRightRadius:8,borderTopRightRadius:8, borderColor:'lightgray'}}>
< FontAwesome5 name="list-ul" size={18} style={{ color:'coral' }}/>
</View>
</View>
{/* //////////////////////////// */}


{Restrants.map((x,i)=>{
    
    return (<>
<View key={i}
style={{display:"flex" ,flexDirection:"row",paddingLeft:10,margin:10 , borderWidth:1,borderStyle:'solid',borderColor:'lightgray',borderRadius:10,backgroundColor:'white'}}>

<Image
        style={{width:100, height:90, }}
        source={{uri:x.Image}}
/>
<View  style={{marginLeft:20,marginTop:5}}>
<Text onPress={() => navigation.navigate('Restraunt', {id: x.id})}   style={{marginBottom:5,fontWeight:"bold"}}>Restrant Name : {x.name}</Text>
<Text  onPress={() => navigation.navigate('Restraunt', {id: x.id})}  style={{marginBottom:5,fontWeight:"bold"}}>Restrunt Address: {x.adress}</Text>

<View style={{ display: "flex",flexDirection: "row", marginBottom:5  }}> 
<FontAwesomeIcon name="clock"   size={20} />
<Text  style={{ marginleft:15 ,paddingleft:15 }}>  45 min    </Text>

<FontAwesomeIcon name="bicycle" style={{ marginleft:30}}  size={20} />
<Text  style={{ marginleft:20}}>  EGP 20.00</Text>

</View>



<View style={{ display: "flex",flexDirection: "row", marginBottom:5  }}> 
<Ionicons name="pricetag-outline"   size={20} style={{color: 'hotpink'}} />
<Text  style={{color: 'hotpink', marginleft:10}}>EGP 97.55 off on select</Text>


</View>
{/* <Button onPress={() => navigation.navigate('Restraunt', {id: x.id})}  color="orange"  size="md">
<Text  style={{fontSize:20}}>go</Text>

</Button> */}
</View>
 


</View>


      
     
    </>
    )})}




</View>
</ScrollView>


    </>
  )
      
}