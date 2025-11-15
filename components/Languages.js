import { StyleSheet, Text, View } from "react-native"

function Languages() {
  return (
    <View style={styles.main}>

    <View style={styles.container}>

      <Text style={styles.title}>Languages</Text>

      <View style={styles.row}>
        <Text style={styles.skillName}>ِArabic</Text>

        <View style={styles.barBack}>
          <View style={[styles.barFill, { width: "95%" }]} />
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.skillName}>Engish</Text>

        <View style={styles.barBack}>
          <View style={[styles.barFill, { width: "82%" }]} />
        </View>
      </View>

    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: "#2E2E2E",
        padding: 15,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        marginTop: 20
  
  },

  title: {
    color: "#cccccc",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },

  skillName: {
    color: "#FFFFFF",
    fontSize: 16,
    width: "35%"
  },

  barBack: {
    width: "65%",    
    height: 8,
    backgroundColor: "#444",
    borderRadius: 4,
  },

  barFill: {
    height: "100%",
    backgroundColor: "#FFC107",
    borderRadius: 4
  },  
  main: {
    backgroundColor: "#1f1f1f",
  }
})

export default Languages
