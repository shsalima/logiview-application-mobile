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

const filteredParcels = parcels.filter((parcel) => {
  const matchSearch = parcel.reference
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchStatus =
    statusFilter === "Tous" ||
    parcel.status === statusFilter;

  return matchSearch && matchStatus;
});

return (
  <>
    <ScrollView style={styles.container}>
      <Header />

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
        />
      ))}

      <SectionTitle title="Véhicules" />

      {vehicles.map((vehicle) => (
        <Card
          vehicle={vehicle}
          key={vehicle.id}
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
    backgroundColor: "#f5f5f5",
  },
});
