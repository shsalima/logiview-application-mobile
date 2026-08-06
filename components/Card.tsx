import { Parcel, Vehicle } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  parcel?: Parcel;
  vehicle?: Vehicle;
};

export default function Card({ parcel, vehicle }: Props) {
  const isParcel = !!parcel;

  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Ionicons
          name={isParcel ? "cube-outline" : "car-outline"}
          size={22}
          color="#3465ff"
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.ref}>
          {isParcel ? `#${parcel!.reference}` : vehicle!.registration}
        </Text>

        <Text style={styles.destination}>
          {isParcel ? parcel!.destination : vehicle!.type}
        </Text>

        <Text style={styles.info}>
          {isParcel
            ? `${parcel!.weight} • ${parcel!.shippingDate}`
            : vehicle!.driver}
        </Text>
      </View>

      <View>
        <View
          style={[
            styles.badge,
            {
              backgroundColor: isParcel
                ? parcel!.status === "Livré"
                  ? "#d8f8e8"
                  : "#fff1c7"
                : vehicle!.status === "Disponible"
                ? "#d8f8e8"
                : "#fff1c7",
            },
          ]}
        >
          <Text
            style={{
              color: isParcel
                ? parcel!.status === "Livré"
                  ? "#16a34a"
                  : "#e88900"
                : vehicle!.status === "Disponible"
                ? "#16a34a"
                : "#e88900",
            }}
          >
            {isParcel ? parcel!.status : vehicle!.status}
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