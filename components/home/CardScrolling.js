import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CardScrolling(props) {
  return (
     <View style={{height:100,width:100 ,marginLeft:10}}>
    <View style={{flex:2}}>
      <Image
      style={{flex:1,width: null, height: null ,resizeMode:"cover"}}
  source={props.url}
      />
     
    </View>
     <View style={{flex:1}}>
     <Text style={{textAlign:"center" ,paddingTop:"4%"}}>{props.name}</Text>
     
    </View>
  </View>
  );
}

// // <Text style={{textAlign:"center" ,paddingTop:"4%"}}>{this.props.name}</Text>



// <Image
//  style={{flex:1,width: null, height: null ,resizeMode:"cover"}} source={this.props.url} />