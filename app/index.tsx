import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

import { parcels, vehicles } from "../data/data";

export default function Index() {

  const [search, setSearch] = useState("");

  const filteredParcels = parcels.filter((parcel) =>
    parcel.reference.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Header />

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />


        <SectionTitle title="Colis" />

        {filteredParcels.map((parcel) => (

          <Card key={parcel.id}>

            <Text>
              Référence : {parcel.reference}
            </Text>

            <Text>
              Destination : {parcel.destination}
            </Text>

            <Text>
              Statut : {parcel.status}
            </Text>

            <Text>
              Poids : {parcel.weight}
            </Text>

            <Text>
              Date : {parcel.shippingDate}
            </Text>

          </Card>

        ))}



        <SectionTitle title="Véhicules" />


        {vehicles.map((vehicle) => (

          <Card key={vehicle.id}>

            <Text>
              Matricule : {vehicle.registration}
            </Text>

            <Text>
              Type : {vehicle.type}
            </Text>

            <Text>
              Chauffeur : {vehicle.driver}
            </Text>

            <Text>
              Statut : {vehicle.status}
            </Text>

            <Text>
              Kilométrage : {vehicle.mileage}
            </Text>

          </Card>

        ))}


      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
  },

});