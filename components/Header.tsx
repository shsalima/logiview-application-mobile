import { View, Text, StyleSheet } from "react-native";

export default function Header(){

return(
<View style={styles.container}>

<View>
<Text style={styles.title}>LogiView</Text>
<Text style={styles.subtitle}>
Tableau de bord{"\n"}logistique temps{"\n"}réel
</Text>
</View>


<View style={styles.avatar}>
<Text style={styles.avatarText}>OS</Text>
</View>


<View style={styles.stats}>

<View style={styles.stat}>
<Text>📦 6 Colis</Text>
</View>

<View style={styles.stat}>
<Text>🚚 5 Flotte</Text>
</View>

</View>


</View>
)

}


const styles=StyleSheet.create({

container:{
padding:20,
backgroundColor:"#fff",
},

title:{
fontSize:20,
fontWeight:"700",
},

subtitle:{
fontSize:12,
color:"#7c8a9b",
marginTop:5
},

avatar:{
position:"absolute",
right:20,
top:20,
backgroundColor:"#3465ff",
width:32,
height:32,
borderRadius:20,
alignItems:"center",
justifyContent:"center"
},

avatarText:{
color:"#fff",
fontSize:12,
fontWeight:"bold"
},

stats:{
flexDirection:"row",
marginTop:15,
gap:10
},

stat:{
backgroundColor:"#f5f7fb",
paddingHorizontal:10,
paddingVertical:6,
borderRadius:15
}

})