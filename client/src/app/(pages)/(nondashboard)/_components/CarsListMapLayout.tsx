"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGetAuthUserQuery } from "@/state/api";
import { Libraries, useLoadScript } from "@react-google-maps/api";
import { useAppSelector } from "@/state/redux";
import { SellCar } from "@/types/prismaTypes";
import { formatNumber } from "@/lib/utils";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
const libraries = ["places"] as Libraries;

const CarsListMapLayout = () => {
  //Get Auth User
  const { data: authUser } = useGetAuthUserQuery();

  let defaultLocationAddress = "";
  if (authUser?.userInfo.location) {
    const { address, city, state, country } = authUser.userInfo.location;
    defaultLocationAddress =
      address + ", " + city + " " + state + ", " + country;
  }

  // Create a ref for the map container
  // and set initial center coordinates based on user's location or default to Melbourne
  const mapContainerRef = useRef(null);
  const [centerCoordinates, setCenterCoordinates] = useState<[number, number]>(
    authUser?.userInfo.location?.coordinates || [144.9631, -37.8136]
  );

  // Load Google Maps API script
  // This is used for the search input functionality
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries,
  });
  const locationInputRef = useRef(null);

  const handlePlaceChanged = async (
    address: google.maps.places.Autocomplete
  ) => {
    if (!isLoaded) return;
    const place = address.getPlace();

    if (!place || !place.geometry) {
      return;
    }
    formData(place);
  };

  const formData = (data: google.maps.places.PlaceResult) => {
    const addressComponents = data?.address_components;

    if (addressComponents) {
      const latitude = data?.geometry?.location?.lat() || 0;
      const longitude = data?.geometry?.location?.lng() || 0;
      setCenterCoordinates([longitude, latitude]);
    }
  };

  // Retrieve filtered sell cars
  const filteredSellCars = useAppSelector(
    ({ global }) => global.filteredSellCars
  ) as SellCar[];

  useEffect(() => {
    if (!isLoaded || loadError) return;

    // Google Maps Autocomplete
    if (locationInputRef.current && window.google && window.google.maps) {
      const options = {
        componentRestrictions: { country: "au" },
        fields: ["address_components", "geometry"],
      };
      const autocomplete = new window.google.maps.places.Autocomplete(
        locationInputRef.current as HTMLInputElement,
        options
      );
      autocomplete.addListener("place_changed", () =>
        handlePlaceChanged(autocomplete)
      );
    }

    // Mapbox Map
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLElement,
        style: "mapbox://styles/harryhan0401/cmb8pa6lj00nu01swcrus3y71",
        center: centerCoordinates,
        zoom: 12,
      });
      filteredSellCars.forEach((sellCar) => {
        const marker = createSellCarMarker(sellCar, map);
        const markerElement = marker.getElement();
        const path = markerElement.querySelector("path[fill='#3FB1CE']");
        if (path) path.setAttribute("fill", "#000000");
      });

      return () => map.remove();
    }
  }, [isLoaded, loadError, centerCoordinates]);

  return (
    <div className="h-[calc(100vh-325px)] w-full basis-5/12 grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{ height: "100%", width: "100%" }}
      />
      <div className="absolute w-3/4 top-5 left-5 flex items-center bg-white bg-opacity-70 px-4 py-2 rounded shadow z-10">
        <input
          type="text"
          ref={locationInputRef}
          className="bg-transparent outline-none text-black font-bold w-full"
          placeholder="Search location..."
          defaultValue={defaultLocationAddress}
        />
      </div>
    </div>
  );
};

const createSellCarMarker = (sellCar: SellCar, map: mapboxgl.Map) => {
  const { make, model, year } = sellCar.car;
  const customMake =
    make.toLowerCase() === "mercedesbenz" ? "Mercedes-Benz" : make;
  const title = customMake + " " + model + " " + year;
  const marker = new mapboxgl.Marker()
    .setLngLat([sellCar.longitude, sellCar.latitude])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/sellCars/${sellCar.id}" target="_blank" class="marker-popup-title">${title}</a>
            <p class="marker-popup-price">
              $${formatNumber(sellCar.price)}
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};
export default CarsListMapLayout;
