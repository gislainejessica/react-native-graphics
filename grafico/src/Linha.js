import React from 'react';
import { SafeAreaView , View } from 'react-native';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'

export default function Linha() {
  const dados = [80, -10, 40, 15, -85, 91, -35, 53, -24, 50]
  return (
    <SafeAreaView style={{flexDirection:'row'}}>
      <YAxis 
        data={dados} 
        style={{marginBottom:30}} 
        contentInset={{top: 10, bottom: 10}}  
      />

      <View style={{flex:1}}>
        <LineChart 
          style={{height:300}} 
          data={dados} 
          svg={{stroke:'#7159c1'}}
          contentInset={{top: 20, bottom: 20}}  
        >
          <Grid/>
        </LineChart>
        <XAxis 
          style={{marginHorizontal:10, height:30}} 
          data={dados}  
          formatLabel={(value, index) => index}
          contentInset={{top: 10, bottom: 10}}  

        />
      </View>
    </SafeAreaView>
  );
}
