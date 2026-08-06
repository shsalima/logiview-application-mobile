import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={22}
        color="#94A3B8"
      />

      <TextInput
        style={styles.input}
        placeholder="Rechercher un colis ou véhicule..."
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 15,

    height: 56,

    backgroundColor: "#F1F5F9",

    borderRadius: 16,

    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#0F172A",
  },
});