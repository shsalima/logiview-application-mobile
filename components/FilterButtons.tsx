import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FilterButtons({
  selected,
  onSelect,
  parcels,
}: any) {
  const transit = parcels.filter(
    (p: any) => p.status === "En transit"
  ).length;

  const delivered = parcels.filter(
    (p: any) => p.status === "Livré"
  ).length;

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={[
          styles.button,
          selected === "Tous" && styles.active,
        ]}
        onPress={() => onSelect("Tous")}
      >
        <Text
          style={[
            styles.text,
            selected === "Tous" && styles.activeText,
          ]}
        >
          Tous {parcels.length}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          selected === "En transit" && styles.active,
        ]}
        onPress={() => onSelect("En transit")}
      >
        <Text
          style={[
            styles.text,
            selected === "En transit" && styles.activeText,
          ]}
        >
          En transit {transit}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          selected === "Livré" && styles.active,
        ]}
        onPress={() => onSelect("Livré")}
      >
        <Text
          style={[
            styles.text,
            selected === "Livré" && styles.activeText,
          ]}
        >
          Livré {delivered}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 15,
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#eef1f6",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 25,
  },

  active: {
    backgroundColor: "#2563eb",
  },

  text: {
    color: "#4b5563",
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },
});