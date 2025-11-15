import React from 'react'
import { View , Text , StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
function ExtraSkills() {
  return (
    <View style={styles.main}>
      
      <View style={styles.container}>
        <Text style={styles.title}>Extra Skills</Text>

<Text style={styles.text}><Entypo name="rocket" size={24} color="white" />    Bootstrap, Tailwind</Text>
  <Text style={styles.text}><FontAwesome name="diamond" size={24} color="white" />    React Native</Text>
<Text style={styles.text}><MaterialIcons name="developer-mode" size={24} color="white" />    Flutter</Text>
<Text style={styles.text}><EvilIcons name="sc-github" size={24} color="white" />    Github</Text>

        </View> 

     



    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#1f1f1f",

    },

    title: {
    color: "#cccccc",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 20,
    textAlign: "center"
      },

      container: {
        backgroundColor: "#2E2E2E",
        padding: 15,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        marginTop: 20
      },text :{
        color: 'white',
        marginVertical: 5,
        fontSize: 16,

      }
    
})

export default ExtraSkills