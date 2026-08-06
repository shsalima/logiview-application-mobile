import { View, Text, StyleSheet } from "react-native";


export default function Header(){

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        LogiView
      </Text>

      <Text style={styles.subtitle}>
        Tableau de bord logistique
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    padding:20,
    backgroundColor:"#1E88E5",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },

  title:{
    fontSize:26,
    fontWeight:"bold",
    color:"#fff",
  },

  subtitle:{
    fontSize:14,
    color:"#fff",
    marginTop:5,
  }

});