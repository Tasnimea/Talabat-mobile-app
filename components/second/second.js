import React from "react";
import {View, Text,} from 'react-native'
import { Avatar, Chip } from 'react-native-paper';
import { Icon } from "@rneui/base";
import { Button } from "@rneui/themed";
import style from"./secondStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Second({ navigation }) {
  // const user = route.params.user;
  // const [data,setdata] = useState([])



  // useEffect(()=>{

  //   const getUserData =async ()=>{
  //     await getDoc(doc(db,"users",user)).then((res)=>{
  //       setdata(res.data())

  //       })
  // }

  // getUserData();
    
  // },[])


    return (
      <View  style={style.all}>
          <View style={style.chipPosition}>
          <Chip style={style.chip1}>T</Chip>  
         <View style={style.text1}>
         <Text style={style.text}>tasnime  </Text>
         <View style={style.flag}>
         <Avatar.Image 
         
         size={20}           
         source={{
             uri:
         "https://cdn.countryflags.com/thumbs/egypt/flag-round-250.png",
         }}>

       </Avatar.Image>  
       <Text style={{marginLeft:8, color:'darkgray',fontSize:12,}}>Egypt </Text>

         </View>
     

         </View>
         
          {/* <Ionicons style={style.iconn} 
        name='settings-outline'color="darkgrey" /> */}

<Ionicons style={style.iconn} 
onPress={() => navigation.navigate('UserData')}
        name='settings-outline'color="darkgrey" />  
          </View>



<View style={style.secondPart}>
<View style={style.secondPartSpaceBetween}>
<MaterialCommunityIcons  name='file-document-outline' style={{fontSize:25,}} /> 


      <Text style={{marginLeft:18,fontSize:18,}}>Your orders </Text>
      </View>


        <View style={style.secondPartSpaceBetween}>
        
         <AntDesign  name='tago'style={{fontSize:25,}} /> 
      <Text style={{marginLeft:18,fontSize:18,}}>Offers </Text>
         </View>

         <View style={style.secondPartSpaceBetween}>
        
         <AntDesign  name='bells'style={{fontSize:25,}} /> 
      <Text style={{marginLeft:18,fontSize:18,}}>Notifications </Text>
         </View>

         <View style={style.secondPartSpaceBetween}>
        
         <MaterialIcons  name='folder-open'style={{fontSize:25,}} /> 
      <Text style={{marginLeft:18,fontSize:18,}}>Talabat Pay </Text>
         </View>

         <View style={style.secondPartSpaceBetween}>
        
         <Icon  name='receipt'style={{fontSize:25,}} /> 
      <Text style={{marginLeft:18,fontSize:18,}}>Vouchers </Text>
         </View>

         <View style={style.secondPartSpaceBetween}>
        
         <MaterialCommunityIcons  name='whistle-outline'style={{fontSize:25,}} /> 
      <Text style={{marginLeft:18,fontSize:18,}}>Get help </Text>
         </View>

         <View style={style.secondPartSpaceBetween}>
        
<Ionicons  name='alert-circle-outline'style={{fontSize:25,}} /> 

      <Text style={{marginLeft:18,fontSize:18,}}>About </Text>
         </View>
         
</View>




        </View>

    );
  }