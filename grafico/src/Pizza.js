import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export default function Pizza() {
  const data = [80, 10, 40, 95, 85, 95, 35, 53, 24, 50]
  const labeldata = ['React', 'J', 'C', 'C++', 'C#', 'F#', 'Python', 'Java', 'Ruby', 'HTML']


  const pizzaData = data.map((value, index) => ({
    value,
    key:`pizza-data-${index}-${value}`,
    svg:{
      fill: ('#'+ ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0,7)
    },
    label: labeldata[index]

  }))
  const Labels = ({slices}) => {
    return slices.map((slice,index) => {
      const {pieCentroid, data} = slice
      return( 
        <Text 
          key={`pizza-label-${index}`}  
          x={pieCentroid[0]}  
          y={pieCentroid[1]} 
          fontSize={22}
          fill='white'
          textAnchor='middle'
          aligmentBaseline='middle'
        >
          {data.label}
        </Text>
      )
    })
  }

  return (
    <PieChart data={pizzaData} style={{height: 500}}>
      <Labels />
    </PieChart>
  )
}
