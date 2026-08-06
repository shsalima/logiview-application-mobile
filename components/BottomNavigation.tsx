import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNavigation() {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Ionicons
          name="grid-outline"
          size={24}
          color="#777"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="cube"
          size={24}
          color="#2563eb"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="car-outline"
          size={24}
          color="#777"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="person-outline"
          size={24}
          color="#777"
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    elevation: 10,
  },
});