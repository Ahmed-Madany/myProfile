// import { View, StyleSheet, Text } from 'react-native'

// function Info() {
//     return (
//         <View style={styles.container}>

//             <View style={styles.row}>
                
//                 <View >
//                     <Text style={styles.label}>Age</Text>
//                     <Text style={styles.label}>Country</Text>
//                     <Text style={styles.label}>Freelancer</Text>
//                     <Text style={styles.label}>Address</Text>
//                 </View>

//                 <View style={styles.rightColumn}>
//                     <Text style={styles.value}>27</Text>
//                     <Text style={styles.value}>Egypt</Text>
//                     <Text style={styles.value}>Available</Text>
//                     <Text style={styles.value}>Assuit, Egypt</Text>
//                 </View>

//             </View>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#1f1f1f',
       
    
//     },

//     row: {
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         paddingHorizontal: 20,
//         marginVertical: 10,
//          borderColor: '#cccccc',
//         borderWidth: 1,
//         borderRadius: 10,
//     },

  

//     rightColumn: {
       
//         alignItems: "flex-end", 
//     },

//     label: {
//         color: '#cccccc',
//         marginVertical: 5,
//         fontSize: 16
//     },

//     value: {
//         color: 'white',
//         marginVertical: 5,
//         fontSize: 16,
//         fontWeight: "bold"
//     }
// })

// export default Info


import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Info() {
    return (
     

        <View style={styles.container}>
        <View style={styles.card}>

            <View style={styles.row}>

                {/* العمود الأول: العناوين */}
                <View>
                    <Text style={styles.label}>Age:</Text>
                    <Text style={styles.label}>Residence:</Text>
                    <Text style={styles.label}>Freelancer:</Text>
                    <Text style={styles.label}>Address:</Text>
                </View>

                <View style={styles.Col}>
                    <Text style={styles.value}>23</Text>
                    <Text style={styles.value}>BD</Text>
                    <Text style={styles.value}>Available</Text>
                    <Text style={styles.value}>Assiut, Egypt</Text>
                </View>

            </View>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#2E2E2E",
        padding: 15,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },


    Col: {
        alignItems: "flex-end"
    },

    label: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 6,
    },

    value: {
        color: "#FFFFFF",
        fontSize: 16,
        marginVertical: 6,
    },container: {
        backgroundColor: '#1f1f1f',
    }
})

export default Info
