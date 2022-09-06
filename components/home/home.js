import { Text, View,Image, StyleSheet , ScrollView ,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Card2 from './Card2';
import { Button } from "@rneui/themed";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { render } from 'react-dom';
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./../../firbase-confing";
import React ,{useEffect,useState} from "react";
export default function Home({ navigation }) {
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

   <View style={{display:'flex',flexDirection:'row', backgroundColor:'white', width:388, height:235}}>
   <View  style={{margin:10}}>

      <Text style={{ color:'coral', fontWeight:'bold', fontSize:40 }}> Talabat</Text>
  <Text style={{ fontSize:22, fontWeight:'bold', marginLeft:15, marginTop:7 }}>Groceries</Text>
  <Text style={{ fontSize:20, fontWeight:'bold', marginLeft:15, marginTop:7}}>directly to you</Text>
  <Text style={{ fontSize:12, marginLeft:15, color:'grey', marginTop:7}}>fill your fridge in 20 min</Text>
<View style={{
  marginLeft: 15,
  marginVertical: 12,
borderColor:'coral',
borderWidth: 1,
borderStyle:"solid",
}}>

<Button 
color='white'
>
  <Text style={{ color:'coral',}} onPress={() => navigation.navigate('AllResturants')} >Shop Restrants</Text>

</Button>
</View>

  </View>
  <View>

 <Image
      style={{width: 200, height: 235, marginLeft:10}}
    
         source={{ uri: 'https://v.fastcdn.co/u/e22f1160/52931876-0-2.png'}}  
      /> 
  </View>

</View>
{/* //////////////////////////// */}

<View>
<View>
  <Text style={{ fontSize:20, fontWeight:'bold', marginLeft:15, marginTop:7}}> Hey, good afternoon</Text>
</View>
<View style={{display: 'flex', flexDirection:'row'}}>

<View style={{display: 'flex', flexDirection:'row',height:70 ,marginTop:20,backgroundColor:'white',marginLeft:8 }} onPress={() => navigation.navigate('AllResturants')}>
<View >
   <Text onPress={() => navigation.navigate('AllResturants')} style={{ fontSize:14, fontWeight:'bold', margin:25}} > Food </Text>
</View>
<View>
<Image
      style={{width: 70, height: 67, }}
    
         source={{ uri: 'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc='}}  
      /> 
</View>

</View>

<View style={{display: 'flex', flexDirection:'row' ,height:70 ,marginTop:20,marginLeft:25,backgroundColor:'white' }}>
<View >
   <Text style={{ fontSize:12, fontWeight:'bold', margin:18}} > Talabat Mart </Text>
</View>

<View>
<Image
      style={{width: 60, height: 70, }}
    
         source={{ uri: 'https://media.istockphoto.com/vectors/shopping-bag-full-of-food-and-drinks-food-delivery-concept-vector-id1218631876?k=20&m=1218631876&s=612x612&w=0&h=PLwOErr_CXI8Igo1cOul0Lca4N-A9GI-KpfuaqpFPGw='}}  
      /> 
</View>

</View>

</View>





<View style={{display: 'flex', flexDirection:'row'}}>


<View style={{display: 'flex', flexDirection:'row', height:70 ,marginTop:20,backgroundColor:'white',marginLeft:8  }}>
<View >
   <Text style={{ fontSize:12, fontWeight:'bold', margin:18}} > Groceries </Text>
</View>
<View>
<Image
      style={{width: 60, height: 70, }}
    
         source={{ uri: 'https://previews.123rf.com/images/valeriikhadeiev/valeriikhadeiev2002/valeriikhadeiev200200100/140513151-supermarket-self-service-shopping-cart-basket-full-grocery-food-products.jpg'}}  
      /> 
</View>

</View>

<View style={{display: 'flex', flexDirection:'row',height:70 ,marginTop:20,marginLeft:25,backgroundColor:'white'  }}>
<View >
   <Text style={{ fontSize:10, fontWeight:'bold', margin:10}} > Health Weallness </Text>
</View>
<View>
<Image
      style={{width: 60, height: 60, }}
    
         source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-1626889987.jpg?crop=0.502xw:1.00xh;0.274xw,0&resize=640:*'}}  
      /> 
</View>

</View>

</View>

</View>

<View>
<Text style={{ fontSize:20, fontWeight:'bold', marginLeft:15, marginTop:10}}> Top Picks</Text>

</View>
<ScrollView horizontal={true} pagingEnabled={true}>

<View style={{display: 'flex', flexDirection:'row', marginTop:7}}>
  <View style={{ width:72, height:120,marginLeft:10}}>
<View style={{ backgroundColor:'bisque', width:72, height:77, marginTop:3}}>
<FontAwesome5  name='receipt'style={{fontSize:26,margin:24, color:'coral'}} /> 

</View>
<Text style={{marginLeft:15, fontWeight:'bold'}}> Past Orders</Text>
</View>

<View style={{ width:72, height:120, marginLeft:10}}>
<View style={{ backgroundColor:'bisque', width:72, height:77, marginTop:3}}>
<FontAwesome5  name='money-bill-alt'style={{fontSize:20,margin:24, color:'coral'}} /> 

</View>
<Text style={{marginLeft:15, fontWeight:'bold'}}> Value Meals</Text>
</View>

<View style={{ width:72, height:120, marginLeft:10}}>
<View style={{ backgroundColor:'bisque', width:72, height:77, marginTop:3}}>
<MaterialCommunityIcons  name='cupcake'style={{fontSize:26,margin:24, color:'coral'}} /> 

</View>
<Text style={{marginLeft:15, fontWeight:'bold'}}>Dessrts lovers </Text>
</View>

<View style={{ width:72, height:120, marginLeft:10}}>
<View style={{ backgroundColor:'bisque', width:72, height:77, marginTop:3}}>
<Ionicons  name='pizza'style={{fontSize:26,margin:24, color:'coral'}} /> 

</View>
<Text style={{marginLeft:15, fontWeight:'bold'}}> Pizza Lovers</Text>
</View>

<View style={{ width:72, height:120, marginLeft:10}}>
<View style={{ backgroundColor:'bisque', width:72, height:77, marginTop:3}}>
<FontAwesome5  name='hand-holding-heart'style={{fontSize:26,margin:24, color:'coral'}} /> 

</View>
<Text style={{marginLeft:15, fontWeight:'bold'}}> Give back</Text>
</View>


</View>
</ScrollView>



<View style={{marginTop:30}}>

<ScrollView horizontal={true} pagingEnabled={true}>

{/* /////////////////////// */}
{Restrants.map((x,i)=>{
    
    return (<>
<View style={{flex:1 ,width:100, height:120 ,margin:7}} key={i}>
<Image
        style={{width:100, height:90, }}
        source={{uri:x.Image}}
/>
  <Text onPress={() => navigation.navigate('Restraunt', {id: x.id})} style={{ fontWeight:'bold'}}  >
            {x.name}</Text>
</View>

</>
    )})}

</ScrollView>
</View>








</View>
</ScrollView>


    </>
  )
      
}