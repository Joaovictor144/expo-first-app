import React from "react";
import {TextInput, Text,View} from "react-native"


export default function Form(){
  return(
    <View>
      <View>
          <Text>Altura</Text>
          <TextInput
          placeholder="escreva sua altura em metros Ex: 1.80"
          keyboardType="numeric"
          />
          <Text>Peso</Text>
          <TextInput
          placeholder="escreva seu peso Ex: 75.80"
          keyboardType="numeric"
          />
      </View>
      <View></View>
      <View></View>
    </View>
  )
}

