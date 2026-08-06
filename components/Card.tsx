import { Parcel, Vehicle } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  parcel?: Parcel;
  vehicle?: Vehicle;
  expanded: boolean;
  onPress: () => void;
};

export default function Card({
  parcel,
  vehicle,
  expanded,
  onPress,
}: Props) {
  const isParcel = !!parcel;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
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
          {isParcel ? "Colis expédié" : "Véhicule"}
        </Text>

        {expanded && (
          <View style={styles.details}>
            {isParcel ? (
              <>
                <View style={styles.detailRow}>
                  <Ionicons
                    name="barbell-outline"
                    size={16}
                    color="#3465ff"
                  />
                  <Text style={styles.detailText}>
                    Poids : {parcel!.weight}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="calendar-outline"
                    size={16}
                    color="#3465ff"
                  />
                  <Text style={styles.detailText}>
                    Date : {parcel!.shippingDate}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <View style={styles.detailRow}>
                  <Ionicons
                    name="person-outline"
                    size={16}
                    color="#3465ff"
                  />
                  <Text style={styles.detailText}>
                    Chauffeur : {vehicle!.driver}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="speedometer-outline"
                    size={16}
                    color="#3465ff"
                  />
                  <Text style={styles.detailText}>
                    Kilométrage : {vehicle!.mileage}
                  </Text>
                </View>
              </>
            )}
          </View>
        )}
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
    </TouchableOpacity>
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
    alignItems: "flex-start",
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

  details: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  detailText: {
    fontSize: 13,
    color: "#475569",
    marginLeft: 8,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
});