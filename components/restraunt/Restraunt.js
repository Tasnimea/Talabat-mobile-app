import React ,{useEffect,useState} from "react";
import { Text, View, StyleSheet,Image,ScrollView } from 'react-native';
import { Divider } from "@rneui/base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from  'react-native-vector-icons/FontAwesome';

import { Avatar } from 'react-native-paper';

import { collection, doc, setDoc, getDoc, getDocs,updateDoc,arrayUnion } from "firebase/firestore";
import{db,auth} from './../../firbase-confing'

import {

  onAuthStateChanged,

  createUserWithEmailAndPassword,

} from "firebase/auth"
export default function Restrant({route,navigation}) {

  const id = route.params.id;
  console.log(id);


  const [email,setEmail] = useState("")

    const[range,setrange]=useState(0);
    const [index, setIndex] = React.useState(0);
    const [Restrant, setRestrant] = useState({});
    const[meals,setmeals]=useState([])

  
    useEffect(()=>{

      onAuthStateChanged(auth, (user) => {
    
        if (user) 

{
  setEmail(user.email)
} 
});
      const getRestrants =async ()=>{
        await getDoc(doc(db,"Resturant",id)).then((res)=>{
          setRestrant(res.data())
          setmeals(res.data().meals)

          })
    }
  
    getRestrants();
      
    },[])
  
    console.log(meals);


    const addToCart = (meal) => {
      const MealDocRef = doc(db, `users/${email}`);
      updateDoc(MealDocRef, {
        order: arrayUnion({...meal, "Quantity":1, }),
      });
      };

    return (
      <ScrollView>
<View>

<Image
      style={{width: 382, height: 180}}
     source={{uri:'https://cdn.winsightmedia.com/platform/files/public/600x450/hamburger-trio.jpg'}}
      />
 <View style={{display:"flex" ,flexDirection:"row",justifyContent:"space-between",marginLeft:10,marginTop:10 }}> 
      <Text style={{fontSize:20}}>
      {Restrant.name}
      </Text>
      <Text style={{fontSize:16,color:"orange",marginTop:5,marginRight:10 }}>
      info
      </Text>

      </View>

      <Text style={{fontSize:12,marginLeft:15}}>
      {Restrant.adress}
      </Text>
      
<View style={{display:"flex" ,flexDirection:"row",paddingLeft:10,marginTop:10 }}>

<Ionicons name='star'style={{fontSize:20,color:"orange"}}/> 
<Ionicons name='star'style={{fontSize:20,color:"orange"}}/> 
<Ionicons name='star'style={{fontSize:20,color:"orange"}}/> 
<Ionicons name='md-star-half-sharp'style={{fontSize:20,color:"orange"}}/> 
<Ionicons name='star-outline'style={{fontSize:20,color:"orange"}}/> 
<Text style={{fontSize:12,marginLeft:20}}>2.9(rating 1239)</Text>
<Text style={{fontSize:15,color:"orange",marginLeft:90 }}>
 Reviews </Text>
</View>

<Divider
          style={{ width: 388, marginTop: 5}}
          color="darkgrey"
        />




<View style={{ display: 'flex', flexDirection: 'row'}}>

    <View>
<View style={{display:"flex",flexDirection:"row",marginVertical:9 , marginHorizontal:10}}>
      <FontAwesome name="clock-o" style={{color:'green', marginTop:2,paddingRight:2}} size={23} />

      <Text style={{fontWeight:"bold",fontSize:15, marginLeft:5}}> 
      in 22 min      
       </Text>
       <Text style={{fontSize:15, marginLeft:5, color:'grey'}}> 
       <FontAwesome name="angle-left" style={{color:'grey', marginTop:5,paddingRight:2}} size={20} />

      delivered fee:EGP  {Restrant.Delivery}    
      <FontAwesome name="angle-right" style={{color:'grey', marginTop:5,paddingRight:2}} size={20} />

       </Text>     
      </View>
      <View style={{display:"flex",flexDirection:"row",marginVertical:2 , marginHorizontal:10}}>
      <Text style={{fontSize:12, marginLeft:28,color:'grey'}}> 
      Delivered with live tracking by       
       </Text>
       <Text style={{fontSize:13,color:"orange",fontWeight:"bold"}}> talabat</Text>

</View>

</View>
<Ionicons name='alert-circle-outline' style={{fontSize:30, marginLeft:25, marginTop:20,color:'darkgrey'}}/>

</View>


<Divider
          style={{ width: 388, marginTop: 5}}
          color="darkgrey"
        />

<View style={{display:"flex" ,flexDirection:"row"}}>

<View style={{  border:1,borderColor:"lightgray",borderWidth:0.8,margin:10,padding:12 ,borderRadius:18, display: "flex",flexDirection: "row" , width:250, }}> 
<Ionicons name="pricetag"   size={22} style={{color: 'hotpink', marginleft:10}} />
<Text  style={{color: 'hotpink', marginleft:10}}>EGP 97.55 off on select</Text>

</View>

<FontAwesome name="shopping-basket" style={{color:'green', fontSize:28, marginLeft:49,marginTop:22}}  onPress={() => navigation.navigate('ShowCard')} />
</View>

<Divider
            style={{ width: 388, marginTop: 5}}
            color="darkgrey"
        />
<View>
<View style={{display:"flex" ,flexDirection:"row",paddingLeft:10,marginTop:4 }}>
<Ionicons name='menu' style={{fontSize:35, marginLeft:10}}/>
</View>

{/* /// */}
{meals.map((meal,i)=>{
    
    return (<>
    <View key={i}>

<View style={{display:"flex" ,flexDirection:"row",paddingLeft:10,marginTop:10 ,justifyContent:"space-between" }}>
<View>
<View style={{display:"flex" ,flexDirection:"row"}}>
<Text  style={{marginBottom:17 ,marginRight:20}}> {meal.name}</Text>
<Text style={{marginRight:20}}>{meal.price} EGP</Text>

</View>
<FontAwesome name="plus-square" style={{color:'green', fontSize:22}} onPress={()=>addToCart(meal)} />
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



</View>







</View>
</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    margin:0,
    padding:0
  },
  box:{
    padding:9, 
    shadowColor: 'lightgray',
    margin:10,
    marginVertical:10,
    fontSize:16,
    display:"flex",
    flexDirection:"row",
    width:250,
    alignItems:"center",
    color:"red",
    borderRadius:10,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderColor:"white",
    borderwidth:1,
    borderStyle:"solid",
    marginLeft:12,
    
    
    }

});
