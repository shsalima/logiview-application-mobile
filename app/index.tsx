import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";

import { parcels } from "../data/data";

export default function Index() {
  const [search, setSearch] = useState("");

  const filteredParcels = parcels.filter((parcel) =>
    parcel.reference.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container}>
      <Header />

      <SearchBar value={search} onChangeText={setSearch} />

      <SectionTitle title="Colis" />

      {filteredParcels.map((parcel) => (
        <Card parcel={parcel} key={parcel.id} />
      ))}

      <SectionTitle title="Véhicules" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
