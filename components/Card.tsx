import { Parcel } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
type Props = {
  parcel: Parcel;
};
export default function Card({ parcel }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Ionicons name="cube-outline" size={22} color="#3465ff" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.ref}>#{parcel.reference}</Text>

        <Text style={styles.destination}>{parcel.destination}</Text>

        <Text style={styles.info}>
          {parcel.weight} • {parcel.shippingDate}
        </Text>
      </View>

      <View>
        <View
          style={[
            styles.badge,
            {
              backgroundColor:
                parcel.status === "Livré" ? "#d8f8e8" : "#fff1c7",
            },
          ]}
        >
          <Text
            style={{
              color: parcel.status === "Livré" ? "#16a34a" : "#e88900",
            }}
          >
            {parcel.status}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  icon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#eef3ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  ref: {
    fontSize: 12,
    color: "#8a94a6",
  },

  destination: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginVertical: 2,
  },

  info: {
    fontSize: 12,
    color: "#999",
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  arrow: {
    textAlign: "center",
    color: "#777",
    marginTop: 5,
  },
});
