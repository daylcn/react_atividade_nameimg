
import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import foto from '/app_loja_daylcn/assets/foto.jpg';



export default function TelaDois() {



  return (
    
    <View>
    <Image source={foto} style={{width:300, height: 300, alignItems: 'center', alignContent: 'center'}}/>
    </View>
    


  );
}


