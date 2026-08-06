import { Parcel, Vehicle } from "../types";


export const parcels: Parcel[] = [
  {
    id: 1,
    reference: "COL-001",
    destination: "Casablanca",
    status: "En transit",
    weight: "5 kg",
    shippingDate: "06/08/2026",
  },
  {
    id: 2,
    reference: "COL-002",
    destination: "Rabat",
    status: "Livré",
    weight: "2 kg",
    shippingDate: "05/08/2026",
  },
];


export const vehicles: Vehicle[] = [
  {
    id: 1,
    registration: "12345-A-6",
    type: "Camion",
    status: "En mission",
    driver: "Ahmed",
    mileage: "120000 km",
  },
  {
    id: 2,
    registration: "67890-B-6",
    type: "Van",
    status: "Disponible",
    driver: "Youssef",
    mileage: "80000 km",
  },
];