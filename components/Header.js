import { Text, View, Image , StyleSheet} from "react-native"
import Entypo from '@expo/vector-icons/Entypo';

function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.photo} >
            <Image source={require('../assets/photo.jpg')}  resizeMode="cover" style={{width: "100%", height: "100%"}}/>
        </View>
        < Text style={styles.text}>
            Ahmed Madany
        </Text>
        <Text style={styles.text2}>
            Software Engineer
        </Text>
        <View style={styles.main}>
      <Entypo name="facebook" size={24} color="#1877F2" />
<Entypo name="twitter" size={24} color="#1DA1F2" />
<Entypo name="linkedin" size={24} color="#0A66C2" />


        </View>
    </View>
  )
  

}
const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
    paddingVertical: 20
},
photo: {
  width: 120,
  height: 120,
  borderRadius: 999,  
  overflow: "hidden", 
},
text:{
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FFC107"
},
text2:{
    fontSize: 16,
    marginTop: 4,
    color: "#CCCCCC"
},
main: {
    
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10

}






}

)

export default Header