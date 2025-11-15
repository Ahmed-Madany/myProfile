import { Linking, TouchableOpacity, View , Text, StyleSheet} from "react-native"

function DownloadButton() {
  const cv ="https://drive.google.com/file/d/1mWuzAf126UtVdyjs97Pxo3WTP_REr1OQ/view?usp=drive_link"
  const handle = () => {
    Linking.openURL(cv)
  }

  return (

   <View style={styles.container}>
    <TouchableOpacity onPress={handle}  style={styles.button}>
      <Text style={styles.Text}>Download CV</Text>
    </TouchableOpacity>

       
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#1f1f1f",
  },

button: {
  backgroundColor: "#FFC107",
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: "center",
  width: "60%",     
  alignSelf: "center" 
}
,

  Text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F1F1F",
  },





})

export default DownloadButton