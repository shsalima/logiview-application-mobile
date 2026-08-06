import { View, Text, StyleSheet } from "react-native";

export default function Card({children}:any){

  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}


const styles = StyleSheet.create({

card:{
 backgroundColor:"#fff",
 padding:15,
 borderRadius:12,
 marginVertical:8,
 shadowColor:"#000",
 shadowOpacity:0.1,
 shadowRadius:5,
 elevation:3
}

});