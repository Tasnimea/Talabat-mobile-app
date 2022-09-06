import React ,{useEffect,useState} from "react";
import { Text, View, StyleSheet,Image,ScrollView } from 'react-native';
import { Divider } from "@rneui/base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from  'react-native-vector-icons/FontAwesome';
import { Button } from "@rneui/themed";

import { Avatar } from 'react-native-paper';

import { collection, doc, setDoc, getDoc, getDocs,updateDoc,arrayUnion,arrayRemove } from "firebase/firestore";
import{db,auth} from './../../firbase-confing'

import {onAuthStateChanged,} from "firebase/auth"
export default function ShowCard() {



  const [email,setEmail] = useState("")
  const[Orders,setOrders]=useState([])

  
    useEffect(()=>{

      onAuthStateChanged(auth, (user) => {
    
        if (user) 

{
  setEmail(user.email)
} 
});
const getRestrants =async ()=>{
    await getDoc(doc(db,`users/${email}`)).then((res)=>{
        setOrders(res.data().order)
        })
}
console.log(Orders)
getRestrants();
    },[])
    


    
    var itemsPrice = Orders.reduce((a, c) => a + c.Quantity * c.price, 0);
    var taxPrice = itemsPrice * 0.1;
    var shippingPrice = itemsPrice > 1000 ? 0 : 20;
    var totalPrice = itemsPrice + taxPrice + shippingPrice;


    // const MealDocRef = doc(db,'users',`${email}`);



        function onRemove(meal){
        updateDoc(doc(db, "users", `${email}`), {
        order: arrayRemove(meal)
        },[]);
        }
        
        
        function onAdd(meal){
        
        const exist = Orders.find((x) => x.name === meal.name);
            setOrders(
                Orders.map((x) =>
                x.name === meal.name ? { ...exist, Quantity: exist.Quantity=exist.Quantity+1 } : x
                )
            );
        
            updateDoc(doc(db, "users", `${email}`),
            { order: Orders },
            { merge: true }
            )
            }
        
        function onMinis(meal){
        
        const exist = Orders.find((x) => x.name === meal.name);
        setOrders(
            Orders.map((x) =>
            x.name === meal.name ? { ...exist, Quantity: exist.Quantity=exist.Quantity-1 } : x
            )
        );
        
        
        if( exist.Quantity===0)
        {
        
    const x = Orders.indexOf(meal);
    Orders.splice(x,1)
    
      }
    
    
      updateDoc(doc(db, "users", `${email}`),
    { order: Orders },
    { merge: true }
    )
      
    }
    
        return (
        <ScrollView>
<View>

{Orders.map((meal)=>{
    
    return (<>
    <View >

<View style={{display:"flex" ,flexDirection:"row",paddingLeft:10,marginTop:10 ,justifyContent:"space-between" }}>
<View>
<View style={{display:"flex" ,flexDirection:"row"}}>
<Text  style={{marginBottom:17 ,marginRight:20}}> {meal.name}</Text>
<Text style={{marginRight:20}}>{meal.price} EGP</Text>
<Text style={{marginRight:20}}> remove</Text>

<FontAwesome name="minus-circle" style={{color:'grey', fontSize:22, marginleft:133}} onPress={()=>onRemove(meal)} />

</View>
<View style={{display:"flex" ,flexDirection:"row"}}>

<FontAwesome name="plus-square" style={{color:'grey', fontSize:22,marginRight:25}} onPress={()=>onAdd(meal)} />

<Text style={{color:'grey', fontSize:18, fontWeight:"bold",marginRight:25,marginBottom:1}}>{meal.Quantity}</Text>
<FontAwesome name="minus-square" style={{color:'grey', fontSize:22}} onPress={()=>onMinis(meal)} />
</View>

</View>
<View>
  
<Avatar.Image 
                  style={{marginRight:20,}}

         size={70}           
         source={{
             uri:'https://daksh.iksharesorts.com/images/burger.jpg'
            }}>
                    </Avatar.Image>  
                    </View>
</View>
<Divider
            style={{ width: 388, marginTop: 5}}
            color="darkgrey"
        />
        
</View>


</>
    )})}



{Orders.length !== 0 && (

<>
<Text style={{marginTop:20 ,marginleft:12, fontSize:22,fontWeight:'bold'}}>  Payment Summary </Text>

<View style={{ marginTop:20,marginleft:20}}>
<View style={{display:"flex" ,flexDirection:"row"}}>
<Text style={{marginleft:20,fontSize:17}}>   Items Price       </Text>

<Text style={{marginleft:20,fontSize:17}}> EGP{itemsPrice.toFixed(2)}</Text>

</View>

<View style={{display:"flex" ,flexDirection:"row", marginTop:15}}>
<Text style={{marginleft:20,fontSize:17}}>   Tax Price           </Text>

<Text style={{marginleft:20,fontSize:17}}> EGP{taxPrice.toFixed(2)}</Text>

</View>
<View style={{display:"flex" ,flexDirection:"row", marginTop:15}}>
<Text style={{marginleft:20,fontSize:17}}>   Shipping Price  </Text>

<Text style={{marginleft:20,fontSize:17}}> EGP{shippingPrice.toFixed(2)}</Text>

</View>
<View style={{display:"flex" ,flexDirection:"row", marginTop:15}}>
<Text style={{marginleft:20,fontSize:17}}>   Total Price        </Text>

<Text style={{marginleft:20,fontSize:17}}> EGP{totalPrice.toFixed(2)}</Text>

</View>
<View style={{margin:30}}>
<Button 
color='coral'
>
  <Text style={{ color:'white', fontSize:16,fontWeight:'bold' }} onPress={() => navigation.navigate('AllResturants')} >Checkout</Text>

</Button>
</View>



</View></>)}

</View>
</ScrollView>
);
}

