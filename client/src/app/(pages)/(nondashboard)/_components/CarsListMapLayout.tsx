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
const libraries: Libraries = ["places"];

// Function to create a marker for a SellCar
function createSellCarMarker(sellCar: SellCar, map: mapboxgl.Map) {
  const { make, model, year } = sellCar.car;
  const displayMake =
    make.toLowerCase() === "mercedesbenz" ? "Mercedes-Benz" : make;
  const title = `${displayMake} ${model} ${year}`;
  return new mapboxgl.Marker()
    .setLngLat([sellCar.longitude, sellCar.latitude])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <a href="/sellCars/${sellCar.id}" target="_blank">
          <h1 class="font-semibold text-lg">${title}</h1>
          <p class="text-sm text-gray-500">
            $${formatNumber(sellCar.price)}
          </p>
          <p class="text-sm text-gray-500">
            ${formatNumber(sellCar.mileage)} km
          </p>
        </a>
        `
      )
    )
    .addTo(map);
}

const CarsListMapLayout = () => {
  // Get authenticated user
  const { data: authUser } = useGetAuthUserQuery();
  const isFiltering = useAppSelector(
    ({ global }) => global.isFiltering
  ) as boolean;
  const filteredSellCars = useAppSelector(
    ({ global }) => global.filteredSellCars
  ) as SellCar[];

  // Default location
  const userLocation = authUser?.userInfo.location;
  const defaultLocationAddress = userLocation
    ? `${userLocation.address}, ${userLocation.city} ${userLocation.state}, ${userLocation.country}`
    : "";

  // Map and input refs
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const locationInputRef = useRef<HTMLInputElement | null>(null);

  // Center coordinates state
  const [centerCoordinates, setCenterCoordinates] = useState<[number, number]>(
    userLocation?.coordinates || [144.9631, -37.8136]
  );

  // Google Maps API script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries,
  });

  // Handle Google Places Autocomplete
  useEffect(() => {
    if (
      !isLoaded ||
      loadError ||
      !locationInputRef.current ||
      !window.google?.maps
    )
      return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      locationInputRef.current,
      {
        componentRestrictions: { country: "au" },
        fields: ["address_components", "geometry"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place?.geometry?.location) {
        setCenterCoordinates([
          place.geometry.location.lng(),
          place.geometry.location.lat(),
        ]);
      }
    });
  }, [isLoaded, loadError]);

  // Initialize map
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: "mapbox://styles/harryhan0401/cmb8pa6lj00nu01swcrus3y71",
      center: centerCoordinates,
      zoom: 12,
    });

    return () => {
      mapRef.current?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resize map on filter change
  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current) mapRef.current.resize();
    }, 100);
  }, [isFiltering]);

  // Update map center when coordinates change
  useEffect(() => {
    mapRef.current?.setCenter(centerCoordinates);
    mapRef.current?.setZoom(12);
  }, [centerCoordinates]);

  useEffect(() => {
    // Remove existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    if (filteredSellCars.length > 0) {
      filteredSellCars.forEach((sellCar) => {
        const marker = createSellCarMarker(sellCar, mapRef.current!);
        const markerElement = marker.getElement();
        const path = markerElement.querySelector("path[fill='#3FB1CE']");
        if (path) path.setAttribute("fill", "#000000");
        markersRef.current.push(marker);
      });
    }
  }, [filteredSellCars]);

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

export default CarsListMapLayout;
