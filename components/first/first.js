import React ,{useEffect,useState} from "react";
import { View, Text,Image} from 'react-native'
 import style from"./firstStyle";
 import { Searchbar } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./../../firbase-confing";
import { Button} from "@rneui/themed";


export default function First({navigation}) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

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

       
        <View  style={style.all}>
            
        <View style={style.all}>

<Searchbar
        style={style.main}
        placeholder="Search food and more"
        onChangeText={onChangeSearch}
        value={searchQuery}
    />
        </View>
        
        { searchQuery=='' && 
<View>
        <View>
<Text style={style.text1}>
    Recent searchrd
</Text>
        </View>

    <View style={style.secondPart}>
    <View style={style.secondPartSpaceBetween}>
    <Ionicons  name='timer-outline'style={{fontSize:18,color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>hart </Text>
</View>

    <View style={style.secondPartSpaceBetween}>
    <Ionicons  name='timer-outline'style={{fontSize:18,color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>att </Text>
</View>




    </View>



    <View>
<Text style={style.text1}>
    Popular searches
</Text>
        </View>


    <View style={style.secondPart}>
    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>chicken </Text>
</View>

    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>pizza </Text>
</View>


<View style={style.secondPartSpaceBetween}>
<FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>burgur </Text>
</View>




    </View>







    <View style={style.secondPart}>
    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>macdonalds </Text>
</View>

    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>dessert </Text>
</View>


<View style={style.secondPartSpaceBetween}>
<FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>pasta </Text>

</View>




    </View>







    <View style={style.secondPart}>
    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>mac </Text>
</View>

    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>shawarma </Text>
</View>


<View style={style.secondPartSpaceBetween}>
<FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>crepe </Text>
</View>




    </View>
    <View style={style.secondPart}>
    <View style={style.secondPartSpaceBetween}>
    <FontAwesomeIcon  name='line-chart'style={{fontSize:18, color:"grey"}} /> 
    <Text style={{marginLeft:18,fontSize:12,}}>kfc </Text>
</View>
</View></View>
}

{Restrants.filter((rest)=> rest.name== (searchQuery.toLowerCase())).map((x)=>{
    
    return (<>
<View 
style={{display:"flex" ,flexDirection:"row",paddingLeft:10,margin:10 , borderWidth:1,borderStyle:'solid',borderColor:'darkgrey',borderRadius:10,backgroundColor:'white'}}>

<Image
        style={{width:100, height:90, }}
        source={{uri:x.Image}}
/>
<View  style={{marginLeft:20,marginTop:5}}>
<Text  style={{marginBottom:5,fontWeight:"bold"}}>Restrant Name : {x.name}</Text>
<Text style={{marginBottom:5,fontWeight:"bold"}}>Restrunt Address: {x.adress}</Text>

<View style={{ display: "flex",flexDirection: "row", marginBottom:5  }}> 
<FontAwesomeIcon name="clock-o"   size={20} />
<Text  style={{ marginleft:15 ,paddingleft:15 }}>  45 min    </Text>

<FontAwesomeIcon name="bicycle" style={{ marginleft:30}}  size={20} />
<Text  style={{ marginleft:20}}>  EGP 20.00</Text>

</View>



<View style={{ display: "flex",flexDirection: "row", marginBottom:5  }}> 
<Ionicons name="pricetag-outline"   size={20} style={{color: 'hotpink'}} />
<Text  style={{color: 'hotpink', marginleft:10}}>EGP 97.55 off on select</Text>


</View>
<Button onPress={() => navigation.navigate('Restraunt', {id: x.id})}  color="orange"  size="md">
<Text  style={{fontSize:20}}>go</Text>

</Button>
</View>
 


</View>


      
     
    </>
    )})}
</View>



   

);
}
