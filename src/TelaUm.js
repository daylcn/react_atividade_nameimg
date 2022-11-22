import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



export default function TelaUm({navigation}) {

  const entrar = () => {
    navigation.reset(
        {
            index: 0,
            routes: [{name: "TelaDois"}]
        }
    )

    
  }


  return (
    <View style={styles.container}>
      <Text>Daylane Maria Carvalho do Nascimento</Text>
      <Button 
      title="Ver foto"
      onPress={() => entrar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
