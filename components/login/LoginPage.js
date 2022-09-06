import React from 'react';
// import { View } from 'react-native-web';
import { Button ,Icon} from "@rneui/themed";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const LoginPage = ({ navigation }) => {
 
    return (
  <View style={styles.container}>
    <View style={styles.container2}>
<Text style={styles.header}>talabat</Text>
<Text>Your evryday , right away</Text>
    </View>
    <View>
      <Text style={styles.Bold}>Login or create an account </Text>
    </View>
    

{/* <Image  style={{width: 400, height: 200}} resizeMode={'cover'} source={require('./WhatsApp Image 2022-08-09 at 6.21.38 PM.jpeg')} /> */}
<View style={styles.container2}>
<Text  >
Login or create account to recive rewards and</Text>
<Text  style={styles.paragraph}>
save your details for faster checkout experince</Text>

<View style={styles.buttonStyle}>
<Button  type="solid" size="lg">
  <Icon style={styles.iconPadding} name="home" color="white"  />
  <Text style={styles.txtMargin}>Continue with google</Text>
</Button>
</View>
<View style={styles.buttonStyle}>
<Button color="White" type="outline" size="lg">
  <Icon style={styles.iconPadding2} name="facebook" color="blue"  />
  <Text style={styles.txtMargin2}>Continue with facebook</Text>
</Button>
</View>
<View style={styles.buttonStyle}>
<Button onPress={() => navigation.navigate('ContinueWithEmail')}
 color="White" type="outline" size="lg" >
  <Icon style={styles.iconPadding} name="email" color="orange"  />
  <Text style={styles.txtMargin2}    >Continue with Email</Text>
</Button>
</View>
{/* <View style={styles.buttonStyle}><Button title="Continue With FaceBook" type="outline" />

</View> */}
{/* <View style={styles.buttonStyle}><Button title="Continue With Email" type="outline" />
</View> */}
  </View>
  </View>
  // onPress ={()=>navigation.navigate('continueWithEmail')}

    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 50,

    },
    buttonStyle: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      width:385,
      borderRadius:50
    },
    Bold : {
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paragraph : {
      opacity:2,
      marginBottom:30
    },
    iconPadding: {
      paddingRight:100
    },
    iconPadding2:{
      paddingRight:83

    },
    txtMargin: {
      marginRight:100,
      fontWeight:"bold",
      color:"white"
      
      
    },
    txtMargin2:{
      marginRight:100,
      fontWeight:"bold",
      color:"black"
    },
    header:{
      fontWeight:"bold",
      color:"orange",
      fontSize: 75
    }

    
    

  
  });
export default LoginPage;
