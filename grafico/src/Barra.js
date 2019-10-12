import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts'

import * as scale from 'd3-scale';  

export default function Barra() {
  const dados = [14, 80, 100, 55, 76, 82]
  return (
    <SafeAreaView style={{height:500 , flexDirection: 'row'} } >
      <YAxis 
        data={dados} 
        style={{marginBottom:30}} 
        contentInset={{top: 10, bottom: 10}}  
      />

      <View style={{flex:1}}>
        <BarChart style={{flex:1}} 
          data={dados} 
          gridMin={0} 
          svg={ {fill: '#7159f1', onPress:(item, index) => {} }}
        >
          <Grid/>
        </BarChart>
        <XAxis 
          style={{marginHorizontal:-10}} 
          data={dados}  
          scale={scale.scaleBand}
          formatLabel={(value, index) => index}
          contentInset={{top: 10, bottom: 10}}  
        />
      </View>
    </SafeAreaView>  
  );
}
