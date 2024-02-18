import hotelCards from "@/public/data/Cards_Hotels.json";
import hotelDetails from "@/public/data/hotelDetails.json";

export async function getHotelDetails(hotelId: string) {
    // Fetch API;

    // Return null

    setTimeout(() => {
        return hotelDetails;
    }, 1500);
};

export async function getHotelList() {
    setTimeout(() => {
        return hotelCards;
    }, 1500);
};

export async function getBestHotels() {
    setTimeout(() => {
        return hotelCards;
    }, 1500);
};

export async function getDestinationHotels(destinationId: string) {
    setTimeout(() => {
        return hotelCards;
    }, 1500);
}; 
