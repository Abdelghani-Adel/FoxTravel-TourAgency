"use client";
import TransferCard from "@/components/cards/TransferCard";
import Filter from "@/components/Filter/Filter";
import AutocompleteInput from "@/components/ServiceSearch/TransportSearch/Autocomplete";
import TransportSearch from "@/components/ServiceSearch/TransportSearch/TransportSearch";
import { useAppSelector } from "@/redux/store";
import apiClient from "@/services/clients";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Page = () => {
  const [transfers, setTransfers] = useState<any[]>([]);
  const transportType = useAppSelector((state) => state.transportSearch.type);
  const onwayForm = useAppSelector((state) => state.transportSearch.oneWay);
  const roundForm = useAppSelector((state) => state.transportSearch.round);
  const excursionsForm = useAppSelector((state) => state.transportSearch.excursions);
  const multipleForm = useAppSelector((state) => state.transportSearch.multiple);

  onwayForm.pickupLocation.lat;

  useEffect(() => {
    let lat;
    let lon;
    let dropLat;
    let dropLon;
    let passengers: any;
    let pickupDate: any;

    switch (transportType) {
      case "oneway":
        lat = onwayForm.pickupLocation.lat;
        lon = onwayForm.pickupLocation.lon;
        dropLat = onwayForm.dropoffLocation.lat;
        dropLon = onwayForm.dropoffLocation.lon;
        passengers = onwayForm.passengers;
        pickupDate = dayjs(onwayForm.pickupDate).format("DD/MM/YYYY");
        break;
      case "round":
        lat = roundForm.pickupLocation.lat;
        lon = roundForm.pickupLocation.lon;
        dropLat = roundForm.dropoffLocation.lat;
        dropLon = roundForm.dropoffLocation.lon;
        passengers = onwayForm.passengers;
        pickupDate = dayjs(roundForm.pickupDate).format("DD/MM/YYYY");
        break;
      case "excursion":
      // lat = excursionsForm.pickupLocation.lat;
      // lon = excursionsForm.pickupLocation.lon;
      // dropLat = excursionsForm.dropoffLocation.lat;
      // dropLon = excursionsForm.dropoffLocation.lon;
      case "multiple":
      // lat = multipleForm.pickupLocation.lat;
      // lon = multipleForm.pickupLocation.lon;
      // dropLat = multipleForm.dropoffLocation.lat;
      // dropLon = multipleForm.dropoffLocation.lon;
    }

    const fetchData = async () => {
      const response = await axios.post(
        "https://fox.devsdiamond.com/api/Transport/getAvailableRatePerUnitPerZoneForBooking",
        // {
        //   CompanyId: 1,
        //   Latitude: "27.0715739",
        //   Longitude: "33.8871759",
        //   dropoffLatitude: "27.1802887",
        //   dropoffLongitude: "33.8027326",
        //   Customer_Id: 2,
        //   BookingDate: "08/04/2025",
        //   passengers: 2,
        // }
        {
          CompanyId: 1,
          Latitude: `${onwayForm.pickupLocation.lat}`,
          Longitude: `${onwayForm.pickupLocation.lon}`,
          dropoffLatitude: `${onwayForm.dropoffLocation.lat}`,
          dropoffLongitude: `${onwayForm.dropoffLocation.lon}`,
          Customer_Id: 2,
          BookingDate: `${pickupDate as string}`,
          passengers: `${passengers}`,
        }
      );

      const result = response.data;
      setTransfers(result);
    };

    try {
      // fetchData();
      if (lat && lon && dropLat && dropLon && pickupDate) {
        fetchData();
      }
    } catch (e: any) {}
  }, [transportType, onwayForm, roundForm, excursionsForm, multipleForm]);

  return (
    <div className="container mt-4 mb-5">
      <div className="m-auto mb-4 bgSecondary p-3 rounded-3">
        <TransportSearch />
      </div>

      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">
          <Filter />
        </div>

        <div className="col-12 col-lg-9">
          {transfers.length < 1 && <h3>No Transfers Available</h3>}

          <div className="d-flex flex-column gap-3">
            {transfers.length > 0 &&
              transfers.map((trans) => <TransferCard key={trans.Transfer_Id} transfer={trans} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
