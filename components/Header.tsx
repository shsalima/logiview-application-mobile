import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  parcelsCount: number;
  vehiclesCount: number;
};

export default function Header({
  parcelsCount,
  vehiclesCount,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>LogiView</Text>

          <Text style={styles.subtitle}>
            Tableau de bord logistique temps réel
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>OS</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Ionicons
            name="cube-outline"
            size={18}
            color="#2563eb"
          />

          <Text style={styles.statText}>
            {parcelsCount} Colis
          </Text>
        </View>

        <View style={styles.stat}>
          <Ionicons
            name="car-outline"
            size={18}
            color="#16a34a"
          />

          <Text style={styles.statText}>
            {vehiclesCount} Flotte
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,
  },

  topRow: {
    flexDirection: "row",
     paddingTop: 30,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#64748b",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#3465ff",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  stats: {
    flexDirection: "row",
    marginTop: 18,
  },

  stat: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#fff",

    borderWidth: 1,
    borderColor: "#E5E7EB",

    borderRadius: 20,

    paddingHorizontal: 12,
    paddingVertical: 8,

    marginRight: 10,
  },

  statText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
});