export interface Parcel {
    id: number;
    reference: string;
    destination: string;
    status: "En transit" | "Livré";
    weight: string;
    shippingDate: string;

}