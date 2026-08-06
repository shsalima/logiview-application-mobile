import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import BottomNavigation from "../components/BottomNavigation";

import { parcels,vehicles  } from "../data/data";
import FilterButtons from "@/components/FilterButtons";

export default function Index() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous");
  const [expandedParcel, setExpandedParcel] = useState<number | null>(null);
const [expandedVehicle, setExpandedVehicle] = useState<number | null>(null);

const filteredParcels = parcels.filter((parcel) => {
  const text = search.toLowerCase();

  const matchSearch =
    parcel.reference.toLowerCase().includes(text) ||
    parcel.destination.toLowerCase().includes(text);

  const matchStatus =
    statusFilter === "Tous" ||
    parcel.status === statusFilter;

  return matchSearch && matchStatus;
});
const filteredVehicles = vehicles.filter((vehicle) => {
  const text = search.toLowerCase();

  return (
    vehicle.registration.toLowerCase().includes(text) ||
    vehicle.type.toLowerCase().includes(text)
  );
});

return (
  <>
    <ScrollView style={styles.container}>
      <Header  parcelsCount={parcels.length}
  vehiclesCount={vehicles.length} />

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <FilterButtons
        selected={statusFilter}
        onSelect={setStatusFilter}
        parcels={parcels}
      />

      <SectionTitle title="Colis" />

      {filteredParcels.map((parcel) => (
        <Card
          parcel={parcel}
          key={parcel.id}
            expanded={expandedParcel === parcel.id}
  onPress={() =>
    setExpandedParcel(
      expandedParcel === parcel.id ? null : parcel.id
    )
  }
        />
      ))}

      <SectionTitle title="Véhicules" />

    {filteredVehicles.map((vehicle) => (
  <Card
    key={vehicle.id}
    vehicle={vehicle}
      expanded={expandedVehicle === vehicle.id}
  onPress={() =>
    setExpandedVehicle(
      expandedVehicle === vehicle.id ? null : vehicle.id
    )
  }
  />
))}

    </ScrollView>

    <BottomNavigation />

  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfd",
  },
});
