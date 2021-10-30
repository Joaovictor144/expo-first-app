import React from "react";
import {TextInput, Text,View} from "react-native"
import {styles} from "./style.js"

export default function Form(){
  return(
    <View>
      <View >
          <Text style={styles.texto}>Altura</Text>
          <TextInput
          style={styles.input}
          placeholder="escreva sua altura em metros Ex: 1.80"
          keyboardType="numeric"
          />
          <Text style={styles.texto}>Peso</Text>
          <TextInput
          style={styles.input}
          placeholder="escreva seu peso Ex: 75.80"
          keyboardType="numeric"
          />
      </View>
      <View></View>
      <View></View>
    </View>
  )
}

